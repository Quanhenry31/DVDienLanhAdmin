import config from '~/config';

// Layout
import { HeaderOnly } from '~/layouts';

import ThongKe from '~/pages/Thongke';
import SanPham from '~/pages/SanPham';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';

import HoaDon from '~/pages/HoaDon';

import Chats from '~/pages/Chats';
import User from '~/pages/KhachHang';
import Payment from '~/pages/Payment';
import Invoice from '~/pages/Invoice';
import Blog from '~/pages/Blogs';

import ServicesUsually from '~/pages/Services/ServicesUsually';
import ServicesDay from '~/pages/Services/ServicesDay';
import Package from '~/pages/Services/ServicesUsually/Package';

const publicRoutes = [
  { path: config.routes.thongKe, component: ThongKe },
  { path: config.routes.sanPham, component: SanPham },
  { path: config.routes.hoaDon, component: HoaDon },
  { path: config.routes.profile, component: Profile },
  { path: config.routes.upload, component: Upload, layout: HeaderOnly },
  { path: config.routes.chats, component: Chats },
  { path: config.routes.user, component: User },
  { path: config.routes.payment, component: Payment },
  { path: config.routes.invoice, component: Invoice, layout: null },
  { path: config.routes.blog, component: Blog },
  { path: config.routes.servicesDay, component: ServicesDay },
  { path: config.routes.servicesUsually, component: ServicesUsually },
  { path: config.routes.package, component: Package },

  // { path: '/upload', component: Upload, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
