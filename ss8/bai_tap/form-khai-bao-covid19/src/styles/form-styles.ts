export const KEYFRAMES = {
    fadeIn: "animate-in fade-in zoom-in duration-500",
}

export const LAYOUT_STYLES = {
    container: "flex flex-col items-center justify-center min-h-screen py-10 px-4",
    card: "w-full bg-white shadow-lg rounded-xl p-6 md:p-8 mt-6",
    pageWrapper: "space-y-6",
    sectionTitle: "text-xl font-bold text-gray-800 border-b pb-2",
    subSectionTitle: "font-semibold text-gray-700 border-b pb-2 mb-4",
    flexCenter: "flex items-center justify-center",
    flexBetween: "flex justify-between",
    flexEnd: "flex justify-end",
};

export const INPUT_STYLES = {
    wrapper: "flex flex-col gap-1.5 w-full",
    label: "text-sm font-medium text-gray-700",
    required: "text-red-500",
    field: "flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50",
    textarea: "flex min-h-[80px] w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50",
    errorInput: "border-red-500 focus:ring-red-500",
    errorText: "text-xs text-red-500",
};

export const CHECKBOX_STYLES = {
    wrapper: "flex flex-col gap-1.5",
    groupGrid: "grid gap-4 bg-gray-50 p-4 rounded-lg border border-gray-100",
    itemWrapper: "flex items-start gap-3",
    input: "mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 shrink-0",
    label: "text-sm font-medium text-gray-700 leading-snug cursor-pointer select-none",
};

export const RADIO_STYLES = {
    wrapper: "flex flex-col gap-1.5",
    groupWrapper: "flex gap-4",
    itemWrapper: "flex items-center gap-2",
    input: "h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500",
    label: "text-sm text-gray-700",
};

export const BUTTON_STYLES = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-6 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg",
    success: "bg-green-600 hover:bg-green-700 text-white font-medium py-2.5 px-8 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg",
    secondary: "bg-white border border-gray-300 text-gray-700 font-medium py-2.5 px-6 rounded-md hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-200",
};
