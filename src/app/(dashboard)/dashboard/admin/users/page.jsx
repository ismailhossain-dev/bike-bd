import UsersTable from "@/components/AdminDashboard/Tables/UsersTable/UsersTable";
import React from "react";

const UsersPage = async () => {
  const result = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/admin/users`,
  );

  const data = await result.json();
  const users = data.data;
  // console.log(users, "users");
  return (
    <div>
      <UsersTable users={users}></UsersTable>
    </div>
  );
};

export default UsersPage;
