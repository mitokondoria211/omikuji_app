const Title = () => {
    return (
        <header
            className="
        sticky top-0 z-50
        bg-[#fffaf0]
        text-center
        py-4
        h-24
        border-b border-red-200
      "
        >
            <h1 className="text-2xl font-serif text-red-800 tracking-wider">
                🎍 新年の運だめし
            </h1>

            {/* 和柄の飾り線 */}
            <div className="flex items-center justify-center mt-2">
                <span className="w-12 h-px bg-red-300" />
                <span className="mx-2 text-red-400 text-sm">✿</span>
                <span className="w-12 h-px bg-red-300" />
            </div>
        </header>
    );
};

export default Title;
