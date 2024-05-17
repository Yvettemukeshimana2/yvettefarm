interface ModalProps {
  onClose: () => void;
}
const Modal: React.FC<ModalProps> = ({ onClose }) => {
  const handleCancel = () => {
    onClose();
  };
  return (
    <div className="fixed inset-0 flex justify-center items-center z-50">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className=" bg-white p-8 rounded shadow-lg z-10 w-full max-w-2xl">
        <h1 className="  text-gray-900 text-center font-medium  mb-4 mt-4">
          ADD A NEW CROP
        </h1>
        <div className="flex gap-5 mb-4 justify-center items-center">
          <div className="flex flex-col">
            <p className="text-black text-xs font-bold font-inter">CROP NAME</p>
            <input
              className="w-[306.81px] h-[41.02px] px-[17.06px] py-1 bg-white rounded-[9.75px] border border-zinc-300"
              type="text"
              placeholder="Enter a crop name"
            />
          </div>

          <div className="flex flex-col">
            <p className="text-black text-xs font-bold font-inter">SPECIES</p>
            <input
              className="w-[306.81px] h-[41.02px] px-[17.06px] py-1 bg-white rounded-[9.75px] border border-zinc-300"
              type="text"
              placeholder="Enter a species"
            />
          </div>
        </div>

        <div className="flex gap-5 mb-4 justify-center items-center">
          <div className="flex flex-col">
            <p className="text-black text-xs font-bold font-inter">VARIETY</p>
            <input
              className="w-[306.81px] h-[41.02px] px-[17.06px] py-1 bg-white rounded-[9.75px] border border-zinc-300"
              type="text"
              placeholder="Enter a specific name of crop"
            />
          </div>

          <div className="flex flex-col">
            <p className="text-black text-xs font-bold font-inter">
              AREA COVERED (HECTARES)
            </p>
            <input
              className="w-[306.81px] h-[41.02px] px-[17.06px] py-1 bg-white rounded-[9.75px] border border-zinc-300"
              type="number"
              placeholder="Enter area covered"
            />
          </div>
        </div>

        <div className="flex gap-5 mb-4 justify-center items-center">
          <div className="flex flex-col">
            <p className="text-black text-xs font-bold font-inter">
              PLANTING DATE
            </p>
            <input
              className="w-[306.81px] h-[41.02px] px-[17.06px] py-1 bg-white rounded-[9.75px] border border-zinc-300"
              type="date"
              placeholder="Select date"
            />
          </div>

          <div className="flex flex-col">
            <p className="text-black text-xs font-bold font-inter">
              HARVEST DATE
            </p>
            <input
              className="w-[306.81px] h-[41.02px] px-[17.06px] py-1 bg-white rounded-[9.75px] border border-zinc-300"
              type="date"
              placeholder="Select harvest date"
            />
          </div>
        </div>
        <div className="flex gap-5 mb-4 justify-center items-center">
          <div className="flex flex-col">
            <p className="text-black text-xs font-bold font-inter">
              COMMON PESTS
            </p>
            <input
              className="w-[306.81px] h-[41.02px] px-[17.06px] py-1 bg-white rounded-[9.75px] border border-zinc-300"
              type="text"
              placeholder="Enter common pests for the crop"
            />
          </div>

          <div className="flex flex-col">
            <p className="text-black text-xs font-bold font-inter">
              FERTILIZERS
            </p>
            <input
              className="w-[306.81px] h-[41.02px] px-[17.06px] py-1 bg-white rounded-[9.75px] border border-zinc-300"
              type="text"
              placeholder="Enter fertilizers for the crop"
            />
          </div>
        </div>
        <div className="flex gap-5 mb-4 justify-center items-center">
          <div className="flex flex-col">
            <p className="text-black text-xs font-bold font-inter">FARM</p>
            <select
              className="w-[306.81px] h-[41.02px] px-[17.06px] py-1 bg-white rounded-[9.75px] border border-zinc-300"
              defaultValue=""
            >
              <option value="" disabled hidden>
                Select a farm
              </option>
              <option value="farm1">Farm 1</option>
              <option value="farm2">Farm 2</option>
              <option value="farm3">Farm 3</option>
            </select>
          </div>

          <div className="flex flex-col">
            <p className="text-black text-xs font-bold font-inter">
              CALIBRATIONS
            </p>
            <select
              className="w-[306.81px] h-[41.02px] px-[17.06px] py-1 bg-white rounded-[9.75px] border border-zinc-300"
              defaultValue=""
            >
              <option value="" disabled hidden>
                Select a calibration
              </option>
              <option value="calibration1">Calibration 1</option>
              <option value="calibration2">Calibration 2</option>
              <option value="calibration3">Calibration 3</option>
            </select>
          </div>
        </div>
        <div className="flex justify-center">
          <button
            className="w-[160.39px] h-[41.46px] bg-emerald-800 rounded-[14.62px] text-white text-lg font-normal font-inter capitalize mr-4"
            onClick={handleCancel}
          >
            CANCEL
          </button>
          <button className="w-[160.15px] h-[44.50px] bg-emerald-800 rounded-[14.62px] text-white text-lg font-normal font-inter capitalize">
            ADD Crop
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
