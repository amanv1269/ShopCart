import React, { useEffect, useState } from "react";
import SummaryApi from "../common";
import { toast } from "react-toastify";
import moment from "moment";
import { MdOutlineEdit } from "react-icons/md";
import ChangeUserRole from "../components/ChangeUserRole.js";

const AllUsers = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [openUpdateRole, setOpenUpdateRole] = useState(false);
  const [updateUserDetails, setUpdateUserDetails] = useState({
    email: "",
    name: "",
    role: "",
    _id: "",
  });
  const fetchAllUsers = async () => {
    const fetchData = await fetch(SummaryApi.allusers.url, {
      method: SummaryApi.allusers.method,
      credentials: "include",
    });
    const dataResponse = await fetchData.json();
    if (dataResponse.success) {
      setAllUsers(dataResponse.data);
    }
    if (dataResponse.error) {
      toast.error(dataResponse.message);
    }
    console.log(dataResponse);
  };
  useEffect(() => {
    fetchAllUsers();
  }, []);
  return (
    <div className="p-4 bg-white ">
      <table className="w-full usertable">
        <thead>
          <tr className="bg-black text-white">
            <th>Sr.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Created Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {allUsers.map((el, index) => {
            return (
              <tr key={el._id}>
                {" "}
                {/* Adding key prop with unique identifier */}
                <td>{index + 1}</td> {/* Adding 1 to index to start from 1 */}
                <td>{el?.name}</td>
                <td>{el?.email}</td>
                <td>{el?.role}</td>
                <td>{moment(el?.createdAt).format("ll")}</td>{" "}
                {/* Formatting date */}
                <td>
                  <button
                    className="bg-green-100 p-2 rounded-full cursor-pointer hover:bg-green-500 hover:text-white"
                    onClick={() => {
                      setUpdateUserDetails(el);
                      setOpenUpdateRole(true);
                    }}
                  >
                    <MdOutlineEdit />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {openUpdateRole && (
        <ChangeUserRole
          onClose={() => setOpenUpdateRole(false)}
          name={updateUserDetails.name}
          email={updateUserDetails.email}
          role={updateUserDetails.role}
          userId={updateUserDetails._id}
          callFunc={fetchAllUsers}
        />
      )}
    </div>
  );
};

export default AllUsers;
