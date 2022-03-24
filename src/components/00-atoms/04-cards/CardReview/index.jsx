import "./index.scss";

import React from "react";

const CardReview = (props) => {
    const {
        customer = "@DennisFerguson",
        date = "24 Июн 2019 16:20",
        mark = (
            <svg
                width="81"
                height="13"
                viewBox="0 0 81 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M80.4479 4.45001L76.7256 3.87344L75.0616 0.278131C75.0161 0.179693 74.9414 0.100006 74.849 0.0515683C74.6174 -0.0703067 74.3359 0.0312558 74.2201 0.278131L72.5561 3.87344L68.8338 4.45001C68.7312 4.46563 68.6374 4.51719 68.5655 4.59532C68.4787 4.69045 68.4308 4.81844 68.4325 4.95117C68.4341 5.08389 68.4851 5.21048 68.5743 5.30313L71.2675 8.10157L70.6312 12.0531C70.6163 12.1451 70.6258 12.2396 70.6587 12.326C70.6917 12.4125 70.7467 12.4873 70.8175 12.5422C70.8883 12.597 70.9721 12.6296 71.0594 12.6362C71.1467 12.6428 71.234 12.6233 71.3114 12.5797L74.6408 10.7141L77.9702 12.5797C78.0611 12.6313 78.1667 12.6484 78.2678 12.6297C78.5229 12.5828 78.6945 12.325 78.6505 12.0531L78.0142 8.10157L80.7073 5.30313C80.7806 5.22657 80.829 5.12657 80.8437 5.01719C80.8833 4.74376 80.7044 4.49063 80.4479 4.45001ZM76.881 7.70782L77.4102 10.9938L74.6408 9.44376L71.8715 10.9953L72.4007 7.70938L70.1606 5.38126L73.2569 4.90157L74.6408 1.91251L76.0248 4.90157L79.1211 5.38126L76.881 7.70782Z"
                    fill="#34C759"
                />
                <path
                    d="M12.0154 4.45001L8.29313 3.87344L6.62916 0.278131C6.58371 0.179693 6.50894 0.100006 6.41658 0.0515683C6.18495 -0.0703067 5.90346 0.0312558 5.78765 0.278131L4.12368 3.87344L0.401381 4.45001C0.298758 4.46563 0.204931 4.51719 0.133094 4.59532C0.0462481 4.69045 -0.00160812 4.81844 4.12633e-05 4.95117C0.00169065 5.08389 0.0527107 5.21048 0.141891 5.30313L2.83502 8.10157L2.19876 12.0531C2.18384 12.1451 2.19338 12.2396 2.22631 12.326C2.25923 12.4125 2.31423 12.4873 2.38505 12.5422C2.45587 12.597 2.53968 12.6296 2.62699 12.6362C2.7143 12.6428 2.8016 12.6233 2.879 12.5797L6.2084 10.7141L9.5378 12.5797C9.6287 12.6313 9.73425 12.6484 9.83541 12.6297C10.0905 12.5828 10.262 12.325 10.218 12.0531L9.58178 8.10157L12.2749 5.30313C12.3482 5.22657 12.3966 5.12657 12.4113 5.01719C12.4508 4.74376 12.272 4.49063 12.0154 4.45001Z"
                    fill="#34C759"
                />
                <path
                    d="M29.1235 4.45001L25.4012 3.87344L23.7373 0.278131C23.6918 0.179693 23.6171 0.100006 23.5247 0.0515683C23.2931 -0.0703067 23.0116 0.0312558 22.8958 0.278131L21.2318 3.87344L17.5095 4.45001C17.4069 4.46563 17.313 4.51719 17.2412 4.59532C17.1544 4.69045 17.1065 4.81844 17.1081 4.95117C17.1098 5.08389 17.1608 5.21048 17.25 5.30313L19.9431 8.10157L19.3069 12.0531C19.2919 12.1451 19.3015 12.2396 19.3344 12.326C19.3673 12.4125 19.4223 12.4873 19.4932 12.5422C19.564 12.597 19.6478 12.6296 19.7351 12.6362C19.8224 12.6428 19.9097 12.6233 19.9871 12.5797L23.3165 10.7141L26.6459 12.5797C26.7368 12.6313 26.8424 12.6484 26.9435 12.6297C27.1986 12.5828 27.3701 12.325 27.3262 12.0531L26.6899 8.10157L29.383 5.30313C29.4563 5.22657 29.5047 5.12657 29.5194 5.01719C29.559 4.74376 29.3801 4.49063 29.1235 4.45001Z"
                    fill="#34C759"
                />
                <path
                    d="M46.2316 4.45001L42.5093 3.87344L40.8454 0.278131C40.7999 0.179693 40.7252 0.100006 40.6328 0.0515683C40.4012 -0.0703067 40.1197 0.0312558 40.0039 0.278131L38.3399 3.87344L34.6176 4.45001C34.515 4.46563 34.4211 4.51719 34.3493 4.59532C34.2625 4.69045 34.2146 4.81844 34.2163 4.95117C34.2179 5.08389 34.2689 5.21048 34.3581 5.30313L37.0512 8.10157L36.415 12.0531C36.4001 12.1451 36.4096 12.2396 36.4425 12.326C36.4755 12.4125 36.5304 12.4873 36.6013 12.5422C36.6721 12.597 36.7559 12.6296 36.8432 12.6362C36.9305 12.6428 37.0178 12.6233 37.0952 12.5797L40.4246 10.7141L43.754 12.5797C43.8449 12.6313 43.9505 12.6484 44.0516 12.6297C44.3067 12.5828 44.4782 12.325 44.4343 12.0531L43.798 8.10157L46.4911 5.30313C46.5644 5.22657 46.6128 5.12657 46.6275 5.01719C46.6671 4.74376 46.4882 4.49063 46.2316 4.45001Z"
                    fill="#34C759"
                />
                <path
                    d="M63.3397 4.45001L59.6174 3.87344L57.9535 0.278131C57.908 0.179693 57.8333 0.100006 57.7409 0.0515683C57.5093 -0.0703067 57.2278 0.0312558 57.112 0.278131L55.448 3.87344L51.7257 4.45001C51.6231 4.46563 51.5293 4.51719 51.4574 4.59532C51.3706 4.69045 51.3227 4.81844 51.3244 4.95117C51.326 5.08389 51.377 5.21048 51.4662 5.30313L54.1593 8.10157L53.5231 12.0531C53.5082 12.1451 53.5177 12.2396 53.5506 12.326C53.5836 12.4125 53.6386 12.4873 53.7094 12.5422C53.7802 12.597 53.864 12.6296 53.9513 12.6362C54.0386 12.6428 54.1259 12.6233 54.2033 12.5797L57.5327 10.7141L60.8621 12.5797C60.953 12.6313 61.0586 12.6484 61.1597 12.6297C61.4148 12.5828 61.5864 12.325 61.5424 12.0531L60.9061 8.10157L63.5992 5.30313C63.6725 5.22657 63.7209 5.12657 63.7356 5.01719C63.7752 4.74376 63.5963 4.49063 63.3397 4.45001Z"
                    fill="#34C759"
                />
            </svg>
        ),
        message = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut Lorem ipsum dolor sit amet, consectetur adipiscing.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut Lorem ipsum dolor sit amet, consectetur adipiscing",
    } = props;
    return (
        <div className="card-review">
            <div className="card-review-header">
                <div className="card-review__customer">{customer}</div>
                <div className="card-review__date">{date}</div>
            </div>
            <div className="card-review-mark">{mark}</div>
            <textarea className="card-review__message" readOnly>{message}</textarea>
        </div>
    );
};

export default CardReview;
