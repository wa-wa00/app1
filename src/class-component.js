import React, { Component } from "react";

export default class Calendar extends Component {
    getDate() {
        const dayNames = ["อาทิตย์", "จันทร์", "อังคาร", "พุธ", "พฤหัสบดี", "ศุกร์", "เสาร์"];
        const monthName = ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"];
        
        const d = new Date();
        const weekDay = dayNames[d.getDay()];

        const day = d.getDate();
        const month = monthName[d.getMonth()];
        const year = d.getFullYear() + 543;
        
        return `วัน${weekDay} ที่ ${day} ${month} ${year}`;
    }

    render() {
        return <div>{this.getDate()}</div>;
    }
}