import { useState } from "react";
import { OMIKUJI_LIST, type OmikujiResult } from "../data/omikujiData";
import { weightedRandom } from "../utility/random";
import "../style/omikuji.css";
import omikujiImg from "../assets/omikujibox.jpg";
const Omikuji = () => {
    const [result, setResult] = useState<OmikujiResult | null>(null);
    const [isDrawing, setIsDrawing] = useState<boolean>(false);
    const drawOmikuji = () => {
        if (isDrawing) return;

        setIsDrawing(true);
        setResult(null); // 一旦消す

        setTimeout(() => {
            const rateList: number[] = OMIKUJI_LIST.map(
                (omikuji: OmikujiResult) => omikuji.rate
            );
            const random: OmikujiResult = weightedRandom(
                OMIKUJI_LIST,
                rateList
            );
            setResult(random);
            // アニメーション終了
            setTimeout(() => {
                // setIsDrawing(false);
            }, 1000);
        }, 3000);
    };

    return (
        <div className="flex flex-col justify-center">
            {!result && (
                <>
                    <div className="img-content my-6">
                        <img
                            className="w-64 object-contain mx-auto h-72"
                            src={omikujiImg}
                            alt="おみくじ"
                        />
                    </div>
                    <div className="btn-group flex justify-center">
                        <button
                            className=" btn
     w-[80%]
    h-16
    bg-red-700
    text-yellow-300
    border-2 border-yellow-500
    text-lg
    font-serif
    tracking-wider
    shadow-md
    active:translate-y-1
    active:shadow-sm"
                            onClick={drawOmikuji}
                        >
                            おみくじを引く
                        </button>
                    </div>
                </>
            )}

            {result && (
                <section
                    className={`omikuji-paper ${
                        isDrawing ? "is-entering" : "is-entered"
                    }`}
                >
                    <h1 className="text-center font-bold text-3xl my-5">
                        今年の運勢
                    </h1>
                    <div className="omikuji-content px-3">
                        {/* 運勢 + 総評 */}
                        <div className="head">
                            <h1 className="fortune">{result.fortune}</h1>

                            <p className="summary">{result.summary}</p>
                        </div>

                        <div className="details">
                            <div className="item">
                                <span className="label">願望</span>
                                <span className="text">
                                    {result.details.wish}
                                </span>
                            </div>
                            <div className="item">
                                <span className="label">恋愛</span>
                                <span className="text">
                                    {result.details.love}
                                </span>
                            </div>
                            <div className="item">
                                <span className="label">学業</span>
                                <span className="text">
                                    {result.details.study}
                                </span>
                            </div>
                            <div className="item">
                                <span className="label">商売</span>
                                <span className="text">
                                    {result.details.business}
                                </span>
                            </div>
                            <div className="item">
                                <span className="label">健康</span>
                                <span className="text">
                                    {result.details.health}
                                </span>
                            </div>
                            <div className="item">
                                <span className="label">旅行</span>
                                <span className="text">
                                    {result.details.travel}
                                </span>
                            </div>
                            <div className="item">
                                <span className="label">失物</span>
                                <span className="text">
                                    {result.details.lost}
                                </span>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
};

export default Omikuji;
