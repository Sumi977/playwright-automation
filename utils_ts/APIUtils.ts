export class APIUtils {
    apiContext: any;
    loginPayload: string;

    constructor(apiContext: any, loginPayload: string) {
        this.apiContext = apiContext;
        this.loginPayload = loginPayload;

    }
    async getToken() {
        const loginResponse = await this.apiContext.post('https://rahulshettyacademy.com/api/ecom/auth/login',
            {
                data: this.loginPayload
            }
        )
        const loginResponseJson = await loginResponse.json();
        const token = loginResponseJson.token;
        //console.log(token);

        return token;
    }

    async createOrder(orderPayload: string) {
        let response = { token: String, orderId: String };
        response.token = await this.getToken();
        const orderResponse = await this.apiContext.post('https://rahulshettyacademy.com/api/ecom/order/create-order',
            {
                data: orderPayload,
                headers:
                {
                    'Authorization': response.token,
                    'Content-Type': 'application/json'

                }
            })

        const jsonOrderResponse = await orderResponse.json();
        //console.log(jsonOrderResponse);
        const orderId = jsonOrderResponse.orders[0];
        response.orderId = orderId;

        return response;

    }
}

