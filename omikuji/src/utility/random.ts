/**
 * 指定されたアイテムの配列から、重み（確率）に基づいてランダムに1つ選ぶ関数
 * @param {T[]} items - ランダムに選択したいアイテムの配列
 * @param {number[]} [weights] - 各アイテムの重み（確率）を指定する配列（省略可能）
 * @returns {T} - 選択されたアイテム
 */
export function weightedRandom<T>(items: T[], weights?: number[]): T {
    const TOTAL_PERCENTAGE = 100; // 全体の重みの基準値（必ずしも100である必要はない）
    const DEFAULT_WEIGHT = 1; // デフォルトの重み（未指定の場合の重み）
    const MIN_WEIGHT = 0; // 最小の重み（負の値は許容しない）

    // weights が未指定または空なら、すべてのアイテムの重みを均等に設定
    if (!weights || weights.length === 0) {
        weights = Array(items.length).fill(DEFAULT_WEIGHT);
    }

    // 指定された重みの合計を計算
    const totalSpecifiedWeight = weights.reduce(
        (sum, weight) => sum + weight,
        MIN_WEIGHT
    );

    // 指定されていないアイテムの数を計算
    const remainingItemsCount = items.length - weights.length;

    // 残りのアイテムに割り当てる重みを計算
    const remainingWeight = Math.max(
        TOTAL_PERCENTAGE - totalSpecifiedWeight,
        MIN_WEIGHT
    );

    // 残りのアイテムがある場合、それぞれに均等な重みを割り当てる
    const remainingItemWeight =
        remainingItemsCount > 0
            ? remainingWeight / remainingItemsCount
            : MIN_WEIGHT;

    // 重みのリストを調整（指定されたもの + 自動計算されたもの）
    const adjustedWeights = [
        ...weights,
        ...Array(remainingItemsCount).fill(remainingItemWeight),
    ];

    // 調整された重みの合計を再計算
    const totalWeight = adjustedWeights.reduce(
        (sum, weight) => sum + weight,
        MIN_WEIGHT
    );

    // 0 以上 totalWeight 未満のランダムな値を生成
    let random = Math.random() * totalWeight;

    // 各アイテムの重みを順番に引いていき、ランダム値がその範囲にあるアイテムを選択
    for (let i = 0; i < items.length; i++) {
        if (random < adjustedWeights[i]) {
            return items[i];
        }
        random -= adjustedWeights[i];
    }

    // 万が一すべての条件を通過してしまった場合、最後のアイテムを返す
    return items[items.length - 1];
}
