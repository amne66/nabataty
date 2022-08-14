import React from 'react';

import { FiTwitter } from "react-icons/fi";
import {AiOutlineInstagram} from "react-icons/ai";

export default function Footer() {
  
  return (
      <><div className="footer">
      <div className="footer-block1">
        <img className="logo-footer" src="https://nabataty.com/store/wp-content/uploads/2021/06/Nabataty-LogoAsset-3.png.webp" alt="logo" />
        <br/>
        <p>
          نهدف لتكون تجربتكم في شراء النباتات ومستلزماتها <br />عبر متجر نباتاتي تجربة سهلة ومميزة تابعونا على
          <div className='footer-iocn'>
           <div className="icon-Twitter"> < FiTwitter size={25} /></div>
           <div className="icon-Instagram"><AiOutlineInstagram size={25} /></div> 
          </div>
        </p>
      </div>
      <div className="footer-block2">
        <span className="widet-title">مساعدة</span>
        <div className="line-footer"> </div>
        <ul className='list-unstyled mb-0'>
          <li>
            <p  className='text'>
              الوظائف
            </p>
          </li>
          <li>
            <p className='text'>
              مركز المساعدة
            </p>
          </li>
          <li>
            <p className='text'>
              الحسابات البنكية
            </p>
          </li>
          <li>
            <p className='text'>
              سياسة الشحن والتوصيل
            </p>
          </li>
        </ul>
      </div>
      <div className="footer-block3">
      <span className="widet-title">صفحات تهمك</span>
      <div className="line-footer"> </div>
        <ul className='list-unstyled'>
          <li>
            <p className='text'>
              عن متجر نباتاتي
            </p>
          </li>
          <li>
            <p className='text'>
              دليل العناية بالنباتات
            </p>
          </li>
          <li>
            <p className='text'>
              عروض الصيف
            </p>
          </li>
          <li>
            <p className='text'>
              اعرض منتجاتك في متجرنا
            </p>
          </li>
        </ul>
      </div>

    </div><div className="footer-block4">
          <p className='text-block4'> 
          الحقوق محفوظة 2022 © متجر نباتاتي 🌳   
          </p>
        </div>
      </>
  );
}