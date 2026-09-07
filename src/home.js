import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <p style={{ textAlign: 'center'}}>
      <h3>ยินดีต้อนรับสู่ React Store</h3>
        รายชื่อ <Link to="/products">สินค้า</Link> ที่เรามีจำหน่าย
        <br />
        แต่ท่านต้องเป็น <Link to="/member">สมาชิก</Link> จึงจะสั่งซื้อได้
        <br />
        หากมีข้อสงสัย กรุณา <Link to="/contact">ติดต่อเรา</Link>
      </p>
  )
}