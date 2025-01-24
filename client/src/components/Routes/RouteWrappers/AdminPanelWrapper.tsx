import AdminPanel from "../../../pages/Protected/Authorized/AdminPanel/AdminPanel";
import AuthorizedRoute from "../AuthorizedRoute";

const AdminPanelWrapper = () => {
  return (
    <AuthorizedRoute>
      <AdminPanel />
    </AuthorizedRoute>
  );
};

export default AdminPanelWrapper;
