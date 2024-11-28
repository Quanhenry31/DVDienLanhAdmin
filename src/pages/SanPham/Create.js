import { Modal, Input, Form, Row, Col, message, Button, List, Image } from 'antd';
import axios from 'axios';
import { useState } from 'react';
import UploadImage from '../../components/UploadImage'; // Import component UploadImage

const Create = (props) => {
  const { isCreateModalOpen, setIsCreateModalOpen } = props;

  const [form] = Form.useForm();

  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
  const [isBrandModalOpen, setIsBrandsModalOpen] = useState(false);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false); // Modal sửa ảnh
  const [imageUrl, setImageUrl] = useState(''); // Lưu URL ảnh

  const fetchCategories = async () => {
    try {
      const response = await axios.get('http://localhost:9000/api/categorys');
      setCategories(response?.data?.data);
    } catch (error) {
      message.error('Lỗi khi tải danh sách danh mục!');
    }
  };

  const fetchBrands = async () => {
    try {
      const response = await axios.get('http://localhost:9000/api/brands');
      setBrands(response?.data?.data);
    } catch (error) {
      message.error('Lỗi khi tải danh sách thương hiệu!');
    }
  };
  const handleOpenCategoryModal = () => {
    fetchCategories();
    setIsCategoryModalOpen(true);
  };

  const handleOpenBrandsModal = () => {
    fetchBrands();
    setIsBrandsModalOpen(true);
  };

  const handleOpenImageModal = () => {
    setIsImageModalOpen(true); // Mở modal sửa ảnh
  };
  const handleCloseImageModal = (newImageUrl) => {
    if (newImageUrl) {
      setImageUrl(newImageUrl); // Cập nhật URL ảnh sau khi người dùng chọn ảnh mới
      console.log(newImageUrl);
    }
    setIsImageModalOpen(false); // Đóng modal sửa ảnh
  };

  const handleSelectCategory = (category) => {
    form.setFieldValue('categoryID', category.id);
    setIsCategoryModalOpen(false);
  };

  const handleSelectBrands = (brands) => {
    form.setFieldValue('brandID', brands.id);
    setIsBrandsModalOpen(false);
  };

  const handleCloseCreateModal = () => {
    form.resetFields();
    setIsCreateModalOpen(false);
  };

  const onFinish = async (values) => {
    try {
      // Gửi yêu cầu POST để thêm sản phẩm
      const response = await axios.post('http://localhost:9000/api/products', values);

      if (response.data) {
        const dataImage = {
          name: '',
          image: imageUrl?.image, // Đảm bảo `imageUrl` không bị null hoặc undefined
          imgDetailID: response.data.id, // Lấy `id` từ `response.data`
        };
        try {
          // Gửi yêu cầu POST để thêm ảnh
          await axios.post('http://localhost:9000/api/images', dataImage);
        } catch (error) {
          console.error('Lỗi khi thêm ảnh:', error);
        }
      }
      console.log('Response:', response.data);
      handleCloseCreateModal();
      message.success('Thêm thành công!');
    } catch (error) {
      console.error('Lỗi khi thêm sản phẩm:', error);
      message.error('Thêm sản phẩm thất bại. Vui lòng thử lại!');
    }
  };

  return (
    <>
      <Modal
        title="Thêm mới"
        open={isCreateModalOpen}
        onOk={() => form.submit()}
        onCancel={() => handleCloseCreateModal()}
        maskClosable={false}
        okButtonProps={{ style: { backgroundColor: '#3B82F6' } }}
      >
        <Form name="basic" onFinish={onFinish} layout="vertical" form={form}>
          <Row gutter={[15, 15]}>
            <Col span={48} md={24}>
              <Form.Item label="Tên" name="name" rules={[{ required: true, message: 'Vui lòng nhập tên!' }]}>
                <Input />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                label="Mô tả"
                name="title"
                rules={[{ required: true, message: 'Vui lòng nhập vào chỗ trống!' }]}
              >
                <Input.TextArea rows={4} />
              </Form.Item>
            </Col>
            <Form.Item label="Ảnh mới">
              <div>
                <Button type="link" onClick={handleOpenImageModal}>
                  Thêm ảnh
                </Button>
                <Image
                  width={100}
                  height={100}
                  src={typeof imageUrl === 'string' ? imageUrl : imageUrl?.image || ''} // Check if imageUrl is a string
                  alt="Product Image"
                />
              </div>
            </Form.Item>
            <Col span={48} md={24}>
              <Form.Item
                label="quantity"
                name="quantity"
                rules={[{ required: true, message: 'Vui lòng nhập số lượng!' }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={48} md={24}>
              <Form.Item label="price" name="price" rules={[{ required: true, message: 'Vui lòng nhập giá!' }]}>
                <Input />
              </Form.Item>
            </Col>
            <Col span={48} md={24}>
              <Form.Item label="year" name="year" rules={[{ required: true, message: 'Vui lòng nhập năm sản xuất!' }]}>
                <Input />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                label="Danh mục"
                name="categoryID"
                rules={[{ required: true, message: 'Vui lòng nhập vào chỗ trống!' }]}
              >
                <Input readOnly addonAfter={<Button onClick={handleOpenCategoryModal}>Chọn danh mục</Button>} />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                label="Thương hiệu"
                name="brandID"
                rules={[{ required: true, message: 'Vui lòng nhập vào chỗ trống!' }]}
              >
                <Input readOnly addonAfter={<Button onClick={handleOpenBrandsModal}>Chọn thương hiệu</Button>} />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
      {/* Category Modal */}
      <Modal
        title="Chọn danh mục"
        open={isCategoryModalOpen}
        onCancel={() => setIsCategoryModalOpen(false)}
        footer={null}
        maskClosable={false}
      >
        <List
          dataSource={categories}
          renderItem={(category) => (
            <List.Item>
              <Button type="link" onClick={() => handleSelectCategory(category)}>
                {category.name}
              </Button>
            </List.Item>
          )}
        />
      </Modal>

      {/* Brand Modal */}
      <Modal
        title="Chọn thương hiệu"
        open={isBrandModalOpen}
        onCancel={() => setIsBrandsModalOpen(false)}
        footer={null}
        maskClosable={false}
      >
        <List
          dataSource={brands}
          renderItem={(brands) => (
            <List.Item>
              <Button type="link" onClick={() => handleSelectBrands(brands)}>
                {brands.name}
              </Button>
            </List.Item>
          )}
        />
      </Modal>
      {/* Image Upload Modal */}
      <Modal
        title="Thêm ảnh"
        open={isImageModalOpen}
        onCancel={() => setIsImageModalOpen(false)}
        footer={null}
        maskClosable={false}
      >
        <UploadImage url={imageUrl?.image} setUrl={handleCloseImageModal} />
      </Modal>
    </>
  );
};

export default Create;
