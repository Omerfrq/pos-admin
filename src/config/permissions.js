const userPermissions = [
  { value: 'add-user', label: 'Add User' },
  { value: 'update-user', label: 'Update User' },
  { value: 'delete-user', label: 'Delete User' },
  { value: 'view-user', label: 'View User' },
];

const productPermissions = [
  { value: 'add-product', label: 'Add Product' },
  { value: 'delete-product', label: 'Delete Product' },
  { value: 'update-product', label: 'Update Product' },
  { value: 'view-product', label: 'View Product' },
];

const salesPermissions = [
  { value: 'make-sales', label: 'Make Sales' },
  { value: 'view-sales', label: 'View Sales' },
  { value: 'update-sales', label: 'Update Sales' },
  { value: 'delete-sales', label: 'Delete Sales' },
];

const reportsPermission = [{ value: 'view-reports', label: 'View Reports' }];

export const Permissions = [
  {
    label: 'User',
    options: userPermissions,
  },
  {
    label: 'Product',
    options: productPermissions,
  },
  {
    label: 'Sales',
    options: salesPermissions,
  },
  {
    label: 'Reports',
    options: reportsPermission,
  },
];
