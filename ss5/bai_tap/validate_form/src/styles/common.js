
export const styles = {
    // Layout
    container: "w-full max-w-7xl mx-auto p-4",
    formContainer: "w-full mx-auto p-6 max-w-3xl bg-white shadow-xl rounded-2xl border border-gray-100", // Widened + Card style

    // Typography
    title: "text-3xl font-extrabold mb-6 text-gray-800 tracking-tight", // Bigger, bolder
    label: "block text-gray-700 font-semibold mb-2 text-sm uppercase tracking-wide", // Uppercase labels
    error: "text-red-500 text-xs mt-1 italic font-medium",

    // Buttons (Premium Gradients & Shadows)
    btnPrimary: "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-2.5 px-6 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 !no-underline hover:!no-underline",
    btnWarning: "bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-bold py-1.5 px-4 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 !no-underline hover:!no-underline",
    btnDanger: "bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white font-bold py-1.5 px-4 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 !no-underline hover:!no-underline",
    btnBack: "text-gray-500 hover:text-gray-800 font-medium transition-colors !no-underline hover:!no-underline",

    // Form Inputs (Focus Rings)
    input: "w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow shadow-sm bg-gray-50 focus:bg-white",

    // Table (Modern)
    tableContainer: "overflow-x-auto mt-6 rounded-xl shadow-lg border border-gray-200",
    table: "min-w-full bg-white divide-y divide-gray-200",
    th: "py-3 px-6 bg-gray-50 text-left text-xs font-bold text-gray-500 uppercase tracking-wider",
    td: "py-4 px-6 text-sm text-gray-700 whitespace-nowrap",
    tdCenter: "py-4 px-6 text-sm text-center whitespace-nowrap",

    // Grid System
    gridContainer: "grid grid-cols-1 md:grid-cols-2 gap-6", // Increased gap
    colFull: "col-span-1 md:col-span-2",
};
