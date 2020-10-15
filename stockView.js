class StockView {
    /**
     * Creates a stock view for a particular stock
     * Progress: Working on it
     */
    createStockView() {
        let stockView = `
        <div id="stockInformation" class="card-body">
            <h5 id="stockTitle" class="card-title">Sample Stock</h5>
            <table class="table">
                <tbody>
                <tr>
                    <td>Open Price of the Day</td>
                    <td>$251.74</td>
                    <td>High Price of the Day</td>
                    <td>$263.31</td>
                </tr>
                <tr>
                    <td>Low Price of the Day</td>
                    <td>$260.68</td>
                    <td>Current Price</td>
                    <td>$261.07</td>
                </tr>
                <tr>
                    <td>Previous Close Price</td>
                    <td>$259.45</td>
                </tr>
                </tbody>
            </table>
        </div>
        <button type="button" class="btn btn-dark" onclick="changeStyle()">More Information</button>
        <div id="moreStockInformation" class="card-body">
            <table class="table">
                <tbody>
                <tr>
                    <td>Number of Outstanding Shares</td>
                    <td>4,375</td>
                    <td>Country</td>
                    <td>US</td>
                </tr>
                <tr>
                    <td>Currency</td>
                    <td>USD</td>
                    <td>Exchange</td>
                    <td>NASDAQ/NMS (GLOBAL MARKET)</td>
                </tr>
                <tr>
                    <td>IPO date</td>
                    <td>1980-1-1</td>
                </tr>
                </tbody>
            </table>
        </div>
        `;
    }

    /**
     * Creates an overview of a stock on user's profile
     * Progress: Working on it
     */

    createUserStockOverview() {
        let stockOverview = `<div class="card">
        <div id="stockInformation" class="card-body">
            <h5 id="stockTitle" class="card-title">Portfolio</h5>
            <table class="table">
                <tbody>
                <tr>
                    <td>Money on Account</td>
                    <td>$200.00</td>
                    <td>Value of Portfolio</td>
                    <td>$1,000.31</td>
                </tr>
                </tbody>
            </table>
        </div>
        <button type="button" class="btn btn-dark">ADD FUNDS</button>
    </div>`;
    }

    /**
     * Creates an overview of a user's account
     * Progress: Working on it
     */
    createAccountOverview() {
        let accountView = `<div class="card">
            <div id="stockInformation" class="card-body">
                <h5 id="stockTitle" class="card-title">Portfolio</h5>
                <table class="table">
                    <tbody>
                        <tr>
                            <td>Money on Account</td>
                            <td>$200.00</td>
                            <td>Value of Portfolio</td>
                            <td>$1,000.31</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <button type="button" class="btn btn-dark">ADD FUNDS</button>
        </div>`;
    }
}
