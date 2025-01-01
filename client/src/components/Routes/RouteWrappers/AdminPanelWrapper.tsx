import AdminPanel from "../../../pages/Protected/Authorized/AdminPanel";
import AuthorizedRoute from "../AuthorizedRoute";

const AdminPanelWrapper = () => {
  return (
    <AuthorizedRoute>
      <AdminPanel />
    </AuthorizedRoute>
  );
};

export default AdminPanelWrapper;
