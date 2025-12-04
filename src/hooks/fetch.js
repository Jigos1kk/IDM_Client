class ApiFetch {
    constructor() {
        this.api_url = process.env.REACT_APP_API_URL;
        this.client_id = process.env.REACT_APP_CLIENT_ID;
    }

    async request(uri, method = "GET", headers = {}, body = null) {
        const options = {
            method: method,
            headers: {
                "Content-Type": "application/json",
                "x-application-id": this.client_id,
                ...headers
            },
            credentials: "include",
        };

        if (body && ["POST", "PUT", "PATCH"].includes(method.toUpperCase())) {
            options.body = JSON.stringify(body);
        }
        
        try {
            const response = await fetch(`${this.api_url}${uri}`, options);
            return response;
        } catch (error) {
            console.error('API Fetch error:', error);
            throw error;
        }
    }

    async get(uri, headers = {}) {
        return this.request(uri, "GET", headers);
    }

    async post(uri, body = {}, headers = {}) {
        return this.request(uri, "POST", headers, body);
    }

    async put(uri, body = {}, headers = {}) {
        return this.request(uri, "PUT", headers, body);
    }

    async patch(uri, body = {}, headers = {}) {
        return this.request(uri, "PATCH", headers, body);
    }

    async delete(uri, headers = {}) {
        return this.request(uri, "DELETE", headers);
    }
}

export default new ApiFetch();