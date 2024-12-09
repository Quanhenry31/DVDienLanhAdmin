import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import config from '~/config';
import Menu, { MenuItem } from './Menu';
import {
  HomeIcon,
  HomeActiveIcon,
  LiveIcon,
  LiveActiveIcon,
  ProductIcon,
  ProductActiveIcon,
  BillIcon,
  BillActiveIcon,
  UserIcon,
  UserActiveIcon,
  PaymentIcon,
  PaymentActiveIcon,
  ChatsIcon,
  ChatsActiveIcon,
  BlogIcon,
  BlogActiveIcon,
  MaintenanceIcon,
  MaintenanceActiveIcon,
  PeriodicMaintenanceIcon,
  PeriodicMaintenanceActiveIcon,
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
        <MenuItem title="Chats" to={config.routes.chats} icon={<ChatsIcon />} activeIcon={<ChatsActiveIcon />} />
        <MenuItem title="Blog" to={config.routes.blog} icon={<BlogIcon />} activeIcon={<BlogActiveIcon />} />
        <MenuItem
          title="ServicesU"
          to={config.routes.servicesUsually}
          icon={<MaintenanceIcon />}
          activeIcon={<MaintenanceActiveIcon />}
        />
        <MenuItem
          title="ServicesDay"
          to={config.routes.servicesDay}
          icon={<PeriodicMaintenanceIcon />}
          activeIcon={<PeriodicMaintenanceActiveIcon />}
        />
      </Menu>
    </aside>
  );
}

export default Sidebar;
