import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import config from '~/config';
import Menu, { MenuItem } from './Menu';
import {
  HomeIcon,
  HomeActiveIcon,
  UserGroupIcon,
  UserGroupActiveIcon,
  LiveIcon,
  LiveActiveIcon,
  ProductIcon,
  ProductActiveIcon,
  BillIcon,
  BillActiveIcon,
  BillDetailIcon,
  BillDetailActiveIcon,
  UserIcon,
  UserActiveIcon,
  PaymentIcon,
  PaymentActiveIcon,
} from '~/components/Icons';

const cx = classNames.bind(styles);

const ClearStorageOnRouteChange = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== config.routes.hoaDonDetaill) {
      localStorage.removeItem('eyeOrderId');
    }
    if (location.pathname !== config.routes.user) {
      localStorage.removeItem('userOrderId');
    }
    if (location.pathname !== config.routes.hoaDon) {
      localStorage.removeItem('eyeOrderDetailId');
    }
    if (location.pathname !== config.routes.sanPham) {
      localStorage.removeItem('eyeProductId');
    }
  }, [location.pathname]);

  return null; // This component doesn't render anything
};

function Sidebar() {
  return (
    <aside className={cx('wrapper')}>
      <ClearStorageOnRouteChange />
      <Menu>
        <MenuItem title="Thống kê" to={config.routes.thongKe} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
        <MenuItem
          title="Sản phẩm"
          to={config.routes.sanPham}
          icon={<ProductIcon />}
          activeIcon={<ProductActiveIcon />}
        />
        <MenuItem title="Hóa đơn" to={config.routes.hoaDon} icon={<BillIcon />} activeIcon={<BillActiveIcon />} />

        <MenuItem title="Khách hàng" to={config.routes.user} icon={<UserIcon />} activeIcon={<UserActiveIcon />} />
        {/* <MenuItem
          title="payment"
          to={config.routes.payment}
          icon={<PaymentIcon />}
          activeIcon={<PaymentActiveIcon />}
        /> */}
        <MenuItem title="Tổng quan" to={config.routes.tongQuan} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
      </Menu>
    </aside>
  );
}

export default Sidebar;
