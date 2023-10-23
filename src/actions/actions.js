import axios, { HttpStatusCode } from "axios";
import { ADD_METHOD, GENERATE_INTEGRATION, SET_NAME, SET_PROVIDER_URL } from "./actionsName";

export function generateIntegration(){
    let data = {
        file_data: [
            {name:"builders.go",
             code:"package create\n\nimport (\n\t\"crypto/hmac\"\n\t\"crypto/sha256\"\n\t\"encoding/hex\"\n\t\"fmt\"\n\t\"time\"\n)\n\nfunc BuildHeaders(body string) []Header {\n\tvar headers []Header\n\tvar date = time.Now().UTC().Format(\"2006-01-02T15:04:05.999Z\")\n\tvar auth = fmt.Sprintf(\"V2-HMAC-SHA256, Signature: %s\", encryptData(\"1OABfzqFOD\"+date+body, \"zn6mKpqToe4M5vS3wgvwnnRxNYy1IL1dt\"))\n\treturn append(headers, Header{Key: \"X-Date\", Value: date},\n\t\tHeader{Key: \"X-Login\", Value: \"1OABfzqFOD\"},\n\t\tHeader{Key: \"X-Trans-Key\", Value: \"svXiZ5h6OA\"},\n\t\tHeader{Key: \"Content-Type\", Value: \"application/json; charset=utf-8\"},\n\t\tHeader{Key: \"X-Version\", Value: \"2.1\"},\n\t\tHeader{Key: \"User-Agent\", Value: \"USER_AGENT\"},\n\t\tHeader{Key: \"Authorization\", Value: auth},\n\t\tHeader{Key: \"X-Idempotency-Key\", Value: \"idempotencyHeader\"})\n}\n\nfunc encryptData(stringToEncrypt string, secretKey string) string {\n\th := hmac.New(sha256.New, []byte(secretKey))\n\th.Write([]byte(stringToEncrypt))\n\n\treturn hex.EncodeToString(h.Sum(nil))\n}",
             path :"/create",   
            },
            {name:"models.go",
            code:"package create\n\nimport \"encoding/json\"\n\ntype Request struct {\n\tAmount            int    `json:\"amount\"`\n\tCurrency          string `json:\"currency\"`\n\tCountry           string `json:\"country\"`\n\tPaymentMethodID   string `json:\"payment_method_id\"`\n\tPaymentMethodFlow string `json:\"payment_method_flow\"`\n\tPayer             Payer  `json:\"payer\"`\n\tOrderID           string `json:\"order_id\"`\n\tNotificationURL   string `json:\"notification_url\"`\n}\n\ntype Payer struct {\n\tName     string `json:\"name\"`\n\tEmail    string `json:\"email\"`\n\tDocument string `json:\"document\"`\n}\n\ntype Response struct {\n\tID                string  `json:\"id\"`\n\tAmount            float64 `json:\"amount\"`\n\tCurrency          string  `json:\"currency\"`\n\tPaymentMethodID   string  `json:\"payment_method_id\"`\n\tPaymentMethodType string  `json:\"payment_method_type\"`\n\tPaymentMethodFlow string  `json:\"payment_method_flow\"`\n\tCountry           string  `json:\"country\"`\n\tCreatedDate       string  `json:\"created_date\"`\n\tStatus            string  `json:\"status\"`\n\tStatusDetail      string  `json:\"status_detail\"`\n\tStatusCode        string  `json:\"status_code\"`\n\tOrderID           string  `json:\"order_id\"`\n\tNotificationURL   string  `json:\"notification_url\"`\n\tRedirectURL       string  `json:\"redirect_url\"`\n}\n\ntype Header struct {\n\tKey   string `json:\"key\"`\n\tValue string `json:\"value\"`\n}\n\nfunc (req *Request) String() string {\n\t// We do not handle this error because marshal a cancelRequest will never throw an error\n\tout, _ := json.Marshal(req)\n\tresString := string(out)\n\n\treturn resString\n}",
            path :"/create",   
           },
            {name:"builders.go",
           code:"package purchase\n\nimport (\n\t\"time\"\n\n\t\"github.com/yuno-payments/yuno-go-utils-lib/transaction\"\n\n\t\"github.com/yuno-payments/integration-framework/platform\"\n\t\"github.com/yuno-payments/integration-framework/platform/operation/purchase\"\n\t\"github.com/yuno-payments/testHackaton/internal/operation/purchase/create\"\n)\n\nfunc buildCreateRequest(createRequest purchase.ApplyPaymentRequest) create.Request {\n\treturn create.Request{\n\t\tAmount:            int(createRequest.Amount.Value.IntPart()),\n\t\tCurrency:          createRequest.Amount.Currency,\n\t\tCountry:           createRequest.Country,\n\t\tPaymentMethodID:   \"PC\",\n\t\tPaymentMethodFlow: \"REDIRECT\",\n\t\tPayer: create.Payer{\n\t\t\tName:     createRequest.Customer.FirstName,\n\t\t\tEmail:    createRequest.Customer.Email,\n\t\t\tDocument: createRequest.Customer.Document.DocumentNumber,\n\t\t},\n\t\tOrderID:         createRequest.PaymentMethod.Code,\n\t\tNotificationURL: createRequest.Redirect.Success,\n\t}\n}\n\nfunc buildCreateResponse(transactionResponse create.Response,\n\trequest purchase.ApplyPaymentRequest, audits []platform.OperationDetails,\n) purchase.ProviderResponse {\n\tyunoStatus := mapStatus(transactionResponse.Status, transactionResponse.StatusDetail)\n\treturn purchase.ProviderResponse{\n\t\tTransactionStatus: string(yunoStatus.Status),\n\t\tTransactionCode:   \"\",\n\t\tCreatedAt:         time.Time{},\n\t\tRequireAction: platform.RequireAction{\n\t\t\tRedirectURL: transactionResponse.RedirectURL,\n\t\t},\n\t\tRequireActionType:               \"\",\n\t\tOTP:                             platform.OTP{},\n\t\tProviderStatus:                  \"\",\n\t\tProviderTransactionID:           \"\",\n\t\tProviderResponseCode:            \"\",\n\t\tProviderMessage:                 \"\",\n\t\tProviderStatusDetail:            \"\",\n\t\tProviderParent:                  \"\",\n\t\tResponseMessage:                 \"\",\n\t\tTransactionSubStatus:            string(yunoStatus.SubStatus),\n\t\tProviderRawResponse:             string(audits[0].ProviderRawResponse),\n\t\tProviderRawRequest:              audits[0].ProviderRawRequest,\n\t\tProviderThirdPartyAccountID:     \"\",\n\t\tProviderThirdPartyTransactionID: \"\",\n\t\tAudits:                          nil,\n\t\tAdditionalData:                  nil,\n\t\tPaymentMethod:                   platform.PaymentMethodResponse{},\n\t}\n}\n\ntype providerStatus struct {\n\tStatus      string\n\tDescription string\n}\n\ntype statusMapper map[providerStatus]transaction.OperationStatus\n\nvar mapper = statusMapper{\n\t{Status: \"PAID\", Description: \"The payment was paid\"}:                                transaction.SuccessfulOperationStatus,\n\t{Status: \"AUTHORIZED\", Description: \"The payment was authorized.\"}:                   transaction.SuccessfulOperationStatus,\n\t{Status: \"VERIFIED\", Description: \"The payment was verified.\"}:                       transaction.SuccessfulOperationStatus,\n\t{Status: \"PENDING\", Description: \"The payment is pending.\"}:                          transaction.PendingProviderConfirmationOperationStatus,\n\t{Status: \"PENDING\", Description: \"The payment is pending 3D Secure authentication.\"}: transaction.AuthenticationFailed3DSecureOperationStatus,\n\t{Status: \"CANCELLED\", Description: \"The payment was cancelled.\"}:                     transaction.RejectedInvalidRequestOperationStatus,\n\t{Status: \"EXPIRED\", Description: \"The payment was expired.\"}:                         transaction.RejectedInvalidRequestOperationStatus,\n\t{Status: \"REJECTED\", Description: \"The payment was rejected.\"}:                       transaction.RejectedInvalidRequestOperationStatus,\n\t{Status: \"REJECTED\", Description: \"Rejected by bank.\"}:                               transaction.RejectedInvalidRequestOperationStatus,\n\t{Status: \"REJECTED\", Description: \"Insufficient amount.\"}:                            transaction.RejectedInvalidRequestOperationStatus,\n}\n\nfunc mapStatus(provider string, providerDescription string) transaction.OperationStatus {\n\tkey := providerStatus{Status: provider, Description: providerDescription}\n\tif value, exists := mapper[key]; exists {\n\t\treturn value\n\t}\n\treturn transaction.UnknownErrorOperationStatus\n}",
           path :"",   
          },
        ],
        scaffolding_data: {
            name: "testHackaton",
            purchase: true,
            url_provider: "https://sandbox.dlocal.com/payments"
        }

    }

    const headers = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',
        'Access-Control-Allow-Headers': '*'
    };
    return async (dispatch) => {
        fetch('http://localhost:8080/integrations-operations-ms/integrai/build-integration', {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(data),
            mode:'no-cors'
        }).then(res => {
            if (res.status !== HttpStatusCode.Created) {
                dispatch({type:GENERATE_INTEGRATION, payload: "ERROR"})
            } else {
                dispatch({type:GENERATE_INTEGRATION, payload: "OK"})
            }
        }).catch(err => console.log(err))
    }
}

export function setName(name){
    return (dispatch) => {
        dispatch({type:SET_NAME, payload: name})
    }
}

export function setReduxProviderURL(url) {
    return (dispatch) => {
        dispatch({type:SET_PROVIDER_URL, payload: url})
    }
}

export function addMethod(method) {
    return (dispatch) => {
        dispatch({type:ADD_METHOD, payload: method})
    }
}