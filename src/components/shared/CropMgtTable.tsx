import React, { useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  ColumnSort,
} from "@tanstack/react-table";
import cropdata from "./cropdata.json";
import { useMemo } from "react";
import { FaSearch, FaCalendarAlt } from "react-icons/fa";

import { FaAngleDown } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa";
import { FiTrash2, FiEdit } from "react-icons/fi";
import Modal from "./Modal";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

const CropMgtTable = () => {
  const data = useMemo(() => cropdata, []);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const handleEditClick = () => {
    setShowModal(true);
  };
  const handleModalClose = () => {
    setShowModal(false);
  };
  const [sorting, setSorting] = useState<ColumnSort[]>([]);

  const [sortBy, setSortBy] = useState("Date");
  const [filtering, setfiltering] = useState("");
  const columns = [
    {
      header: "ID",
      accessorKey: "id",
    },
    {
      header: "Crop Name",
      accessorKey: "crop_name",
    },
    {
      header: "Farm",
      accessorKey: "farm",
    },
    {
      header: "Area",
      accessorKey: "area",
    },
    {
      header: "Planting Date",
      accessorKey: "planting_date",
    },
    {
      header: "Current Status",
      accessorKey: "current_status",
    },
    {
      header: "Harvesting Date",
      accessorKey: "harvest_date",
    },
    {
      accessorKey: "Actions",
      Header: "Actions",
      cell: () => (
        <div className="flex space-x-2">
          <FaRegEye className="text-green-500 cursor-pointer" />
          <FiTrash2 className="text-red-500 cursor-pointer" />
          <FiEdit
            className="text-blue-500 cursor-pointer"
            onClick={() => handleEditClick()}
          />
        </div>
      ),
    },
  ];
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 5,
  });
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting: sorting,
      globalFilter: filtering,
      pagination,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setfiltering,
  });
  const handleSortBy = (option: string, label: string) => {
    let newSorting: ColumnSort[] = [];
    if (option === "date") {
      newSorting = [{ id: "planting_date", desc: false }];
    } else if (option === "name") {
      newSorting = [{ id: "crop_name", desc: false }];
    } else if (option === "status") {
      newSorting = [{ id: "current_status", desc: false }];
    }
    setSorting(newSorting);
    setSortBy(label);
    setShowDropdown(false);
  };

  return (
    <div className="w-[100%]  ml-3  mb-4 h-full">
      <div className="flex justify-around items-center  mb-3">
        <div className="flex items-center space-x-3">
          <p className="font-semibold ml-4">SORT BY</p>
          <div className="relative">
            <div
              className="flex items-center space-x-1 px-2 py-1 cursor-pointer"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <FaCalendarAlt />
              <span>{sortBy}</span>
              <FaAngleDown />
            </div>
            {showDropdown && (
              <div className="absolute left-0 mt-2 bg-white border border-gray-200 rounded shadow-md">
                <button
                  onClick={() => handleSortBy("date", "Date")}
                  className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                >
                  Date
                </button>
                <button
                  onClick={() => handleSortBy("name", "Name")}
                  className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                >
                  Name
                </button>
                <button
                  onClick={() => handleSortBy("status", "Status")}
                  className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                >
                  Status
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="relative">
          <input
            value={filtering}
            onChange={(e) => setfiltering(e.target.value)}
            type="text"
            placeholder="Search..."
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 w-[500px]"
          />
          <FaSearch className="absolute right-3 top-3 text-gray-400" />
        </div>
        <button
          className="ml-3 px-4 py-2  bg-[#00743f] text-white rounded-lg hover:bg-black focus:outline-none focus:bg-[#000]"
          onClick={() => setShowModal(true)}
        >
          Add Crop
        </button>
      </div>

      <table className="table-auto border-collapse border-none w-[90%] bg-white rounded-[22px] ml-2">
        <thead>
          <tr className="text-[#000] text-[12px] bolder">
            {table.getHeaderGroups().map((headerGroup) => (
              <React.Fragment key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="px-4 py-2 text-left font-semibold text-gray-700"
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    <div>
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                    </div>
                  </th>
                ))}
              </React.Fragment>
            ))}
          </tr>
        </thead>
        <tbody className="w-[101px] h-[19px] text-black text-xs font-normal font-['Inter']">
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="hover:bg-gray-100">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="px-4 py-2 border-none">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        
      </table>

      <div className="w-[50%] h-[40px] relative bg-white rounded-lg  flex justify-between items-center mt-2 ml-3 border border-[#00743F] left-[25rem]">
        <button
          className="w-1/3 h-7 text-center font-medium font-sans  flex justify-center items-center "
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
        >
          <span>
            <GrFormPrevious />
          </span>
        </button>
        <button
          className="w-1/3 h-7 text-center  font-medium font-sans flex justify-center items-center"
          onClick={() => table.setPageIndex(0)}
        >
          <span>1</span>
        </button>
        <button
          className="w-1/3 h-7 text-center  font-medium font-sans flex justify-center items-center"
          onClick={() => table.setPageIndex(1)}
        >
          <span>2</span>
        </button>
        <button
          className="w-1/3 h-7 text-center  font-medium font-sans flex justify-center items-center"
          onClick={() => table.setPageIndex(2)}
        >
          <span>3</span>
        </button>
        <button
          className="w-1/3 h-7 text-center  font-medium font-sans rounded-r-full flex justify-center items-center"
          onClick={() => table.nextPage()}
        >
          <span>
            {" "}
            <MdOutlineNavigateNext />
          </span>
        </button>
      </div>

      {showModal && <Modal onClose={handleModalClose} />}
    </div>
  );
};

export default CropMgtTable;
