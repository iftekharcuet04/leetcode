def maxProfit(prices):
    if len(prices) <= 1: return 0;
    min_price = prices[0];
    max_profit = 0;
    for price in prices:
        if price < min_price:
            min_price = price;
        else:
            max_profit = max(max_profit, price - min_price);
            min_price = min(min_price, price);

    return max_profit;

print(maxProfit([7,1,5,3,6,4]))