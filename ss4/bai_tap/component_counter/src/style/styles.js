export const AppStyles = {
    container: "min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100 via-white to-gray-100 flex flex-col items-center justify-center p-6 relative overflow-hidden",
    bgDecor: {
        wrapper: "absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-40",
        purpleBlob: "absolute top-[-10%] left-[-10%] w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob",
        yellowBlob: "absolute top-[-10%] right-[-10%] w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000",
        pinkBlob: "absolute -bottom-8 left-20 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"
    },
    header: "text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mb-12 drop-shadow-sm tracking-tighter text-center z-10 selection:bg-purple-200 selection:text-purple-900 py-2 px-4",
    grid: "grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-5xl z-10",
    footer: {
        text: "mt-16 text-slate-500 font-medium text-sm tracking-wide z-10 opacity-80",
        highlight: "text-blue-500 font-bold"
    }
};

export const CounterStyles = {
    card: "group bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/20 transition-all duration-500 hover:-translate-y-2 flex flex-col items-center relative overflow-hidden",
    overlay: "absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none",
    contentWrapper: "relative z-10 flex flex-col items-center w-full",
    labelWrapper: "mb-6 px-4 py-1.5 bg-slate-100/80 rounded-full",
    labelText: "text-sm font-bold uppercase tracking-wider text-slate-500",
    numberWrapper: "relative mb-8 group pl-2 pr-2",
    numberText: "text-7xl font-black text-slate-800 tracking-tighter tabular-nums transition-all duration-300 group-hover:scale-110 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-purple-600 block pb-2 px-2",
    button: "w-full py-3.5 px-6 bg-slate-900 hover:bg-blue-600 text-white font-bold rounded-xl shadow-lg hover:shadow-blue-500/30 active:scale-[0.98] active:translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 group/btn",
    buttonText: "text-lg"
};
