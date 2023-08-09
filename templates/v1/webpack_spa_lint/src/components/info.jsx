import { VelteElement } from "velte"

const Info = ({}) => {
    return (
        <div className="flex w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 text-left">
            <div className="flex items-center justify-center w-12 bg-primary">
                <i className="i-uil-info-circle text-2xl"></i>
            </div>

            <div className="px-4 py-2 -mx-3">
                <div className="mx-3">
                    <span className="font-semibold text-primary dark:text-primary">Info</span>
                    <p className="text-sm text-gray-600 dark:text-gray-200">Study the documentation to get up to speed</p>
                </div>
            </div>
        </div>
    )
}

export default Info