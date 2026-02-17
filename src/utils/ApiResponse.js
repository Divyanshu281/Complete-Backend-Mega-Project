class ApiResponse {
    constructor(stastusCode, data, message="Success"){
        this.statusCode = stastusCode;
        this.data = data;
        this.message = message;
        this.success = stastusCode < 400
    }
}