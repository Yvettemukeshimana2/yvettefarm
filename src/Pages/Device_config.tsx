import React, { useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,

} from "@tanstack/react-table";
import { useMemo } from "react";
import { FiTrash2, FiEdit, FiPlusCircle } from "react-icons/fi";

import DeviceTableData from "./DeviceTable.json";

const DeviceConfig = () => {
  const [deviceCode, setDeviceCode] = useState("");
  const data = useMemo(() => DeviceTableData, []);

  const [filter, setFilter] = useState<string>("");

  // State to control modal visibility
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  // Function to handle form submission
  const handleSubmit = () => {
    // Add logic to handle form submission
    console.log("Form submitted");
    // Close modal after form submission
    setShowModal(false);
  };

  const handleEdit = (id: string) => {
    // Logic to fetch device information for editing
    console.log("Edit", id);
    // Set modal visibility to true
    setShowEditModal(true);
  };

  const handleDelete = (id: string) => {
    // Implement delete functionality here
    console.log("Delete", id);
  };

  const handleAssign = (id: string) => {
    // Implement assign functionality here
    console.log("Assign", id);
  };

  const columns = [
    // New column for checkboxes
    {
      accessorKey: "sn",
      Header: "",
      cell: () => (
        <input
          type="checkbox"
          className="form-checkbox h-5 w-5 text-[#00743F]"
        />
      ),
    },
    {
      accessorKey: "id",
      Header: "ID",
      footer: "ID",
    },
    {
      accessorKey: "location",
      Header: "Location",
    },
    {
      accessorKey: "deviceCode",
      Header: "Device Code",
    },
    {
      accessorKey: "deviceName",
      Header: "Device Name",
    },
    {
      accessorKey: "plantType",
      Header: "Plant Type",
    },
    // New column for status
    {
      accessorKey: "status",
      Header: "Status",
      cell: () => (
        <div className="bg-[#00743F] text-white rounded py-1 text-center">
          Pending
        </div>
      ),
    },
    // New column for action icons
    {
      accessorKey: "actions",
      Header: "Actions",
      cell: (cell: { row: { original: { id: string } } }) => (
        <div className="flex space-x-2">
          <FiPlusCircle
            className="text-green-500 cursor-pointer"
            onClick={() => handleAssign(cell.row.original.id)}
          />
          <FiTrash2
            className="text-red-500 cursor-pointer"
            onClick={() => handleDelete(cell.row.original.id)}
          />
          <FiEdit
            className="text-blue-500 cursor-pointer"
            onClick={() => handleEdit(cell.row.original.id)}
          />
        </div>
      ),
    },
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="p-4 bg-gray-100">
      {showEditModal && (
        <div className="fixed inset-0 flex justify-center items-center z-50">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="bg-white p-8 rounded shadow-lg z-10 w-full max-w-xl">
            <h2 className="text-2xl font-bold mb-4">Update the device</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="deviceCode"
                  className="block text-sm font-medium text-gray-700"
                >
                  Device Code:
                </label>
                <input
                  type="text"
                  id="deviceCode"
                  name="deviceCode"
                  className="border border-gray-300 rounded-md p-2 w-full"
                  value={deviceCode}
                  onChange={(e) => setDeviceCode(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="cropType"
                  className="block text-sm font-medium text-gray-700"
                >
                  Crop Type:
                </label>
                <select
                  id="cropType"
                  name="cropType"
                  className="border border-gray-300 rounded-md p-2 w-full"
                >
                  <option value="crop1">Crop 1</option>
                  <option value="crop2">Crop 2</option>
                  <option value="crop3">Crop 3</option>
                  <option value="crop3">Crop 3</option>
                  <option value="crop3">Crop 3</option>
                </select>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="deviceName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Device Name:
                </label>
                <input
                  type="text"
                  id="deviceName"
                  name="deviceName"
                  className="border border-gray-300 rounded-md p-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="location"
                  className="block text-sm font-medium text-gray-700"
                >
                  Location:
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  className="border border-gray-300 rounded-md p-2 w-full"
                />
              </div>
              <div className="flex space-x-4">
                <button
                  type="submit"
                  className="bg-[#00743F] hover:bg-[#00743F] text-white font-bold py-2 px-4 rounded"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => setShowEditModal(false)}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      <div className="flex items-center space-x-3 mb-4">
        <input
          type="text"
          placeholder="FARM 1A"
          className="border border-gray-400 rounded p-2"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
        <button
          className="bg-[#00743F] hover:bg-[#00743F] text-white font-bold py-2 px-4 rounded"
          onClick={() => setShowModal(true)}
        >
          Add Device
        </button>
      </div>

      <div className="overflow-y-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              {table.getHeaderGroups().map((headerGroup) => (
                <React.Fragment key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      className="px-4 py-2 text-left font-semibold text-gray-700"
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                    </th>
                  ))}
                </React.Fragment>
              ))}
            </tr>
          </thead>
          <tbody className="">
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="hover:bg-gray-200">
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="px-4 py-2">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showModal && (
        <div className="fixed inset-0 flex justify-center items-center z-50">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="bg-white p-8 rounded shadow-lg z-10 w-full max-w-xl">
            <h2 className="text-2xl font-bold mb-4">Publish New Device Here</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="deviceCode"
                  className="block text-sm font-medium text-gray-700"
                >
                  Device Code:
                </label>
                <input
                  type="text"
                  id="deviceCode"
                  name="deviceCode"
                  className="border border-gray-300 rounded-md p-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="cropType"
                  className="block text-sm font-medium text-gray-700"
                >
                  Crop Type:
                </label>
                <select
                  id="cropType"
                  name="cropType"
                  className="border border-gray-300 rounded-md p-2 w-full"
                >
                  <option value="crop1">Crop 1</option>
                  <option value="crop2">Crop 2</option>
                  <option value="crop3">Crop 3</option>
                  <option value="crop3">Crop 3</option>
                  <option value="crop3">Crop 3</option>
                </select>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="deviceName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Device Name:
                </label>
                <input
                  type="text"
                  id="deviceName"
                  name="deviceName"
                  className="border border-gray-300 rounded-md p-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="location"
                  className="block text-sm font-medium text-gray-700"
                >
                  Location:
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  className="border border-gray-300 rounded-md p-2 w-full"
                />
              </div>
              <div className="flex space-x-4">
                <button
                  type="submit"
                  className="bg-[#00743F] hover:bg-[#00743F] text-white font-bold py-2 px-4 rounded"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeviceConfig;
