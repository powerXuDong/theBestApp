import React, { useState, useEffect } from 'react';
import DocumentTitle from 'react-document-title';
import { changeFavicon } from '../../untils/index';
import styles from './index.less';

function SaveMoney() {
  const [iconList] = useState([{
    key: 1,
    img: '//r.51gjj.com/webpublic/images/2020630/GeFSskde7cv9.png',
    title: '多种存钱模式',
    description: '定额和递增的存钱模式，由您自行挑选。攒钱中间也可及时按照预期调整',
  }, {
    key: 2,
    img: '//r.51gjj.com/webpublic/images/2020630/HEHdS05hided9.png',
    title: '个性化提醒功能',
    description: '帮助用户定制存钱的计划，并由您决定提醒的内容',
  }, {
    key: 3,
    img: '//r.51gjj.com/webpublic/images/2020630/Kxsiuk03c37tx.png',
    title: '攒钱手账本',
    description: '实时记录您完成的所有计划和每个小期数，给自己点信心',
  }, {
    key: 4,
    img: '//r.51gjj.com/webpublic/images/2020630/PW0g0Ghpyflns.png',
    title: '攒钱妙招',
    description: '最新的攒钱方式，控制消费的方法论，加强心里的认同感',
  }, {
    key: 5,
    img: '//r.51gjj.com/webpublic/images/2020630/DFh4zFf8f09py.png',
    title: '军队级数据保护',
    description: '安全存储所有数据并进行组织，所有信息使用最强的加密标准（AES-256）加密和生物特征认证',
  }, {
    key: 6,
    img: '//r.51gjj.com/webpublic/images/2020630/t343Ohuqizo8.png',
    title: '创建多个存钱计划',
    description: '可同时创建多个存钱计划，也可按照您想购买的商品进行匹配',
  }])

  useEffect(() => {
    changeFavicon('//r.51gjj.com/webpublic/images/2020630/vyUVvKarz07tv.png');
  }, [])

  function downApp() {
    document.location.href = 'https://apps.apple.com/cn/app/%E6%94%92%E9%92%B1-%E8%81%8C%E5%9C%BA%E4%BA%BA%E7%94%9F%E7%AE%A1%E7%90%86/id1508946280';
  }

  return (
    <DocumentTitle title="攒钱">
      <div className={styles.pageWrap}>
        {/* 顶部信息条 */}
        <div className={styles.headerWrap}>
          <img src="https://r.51gjj.com/webpublic/images/2020630/y7clwIotmv6nt.png" alt="" />
          <span onClick={downApp}>下载APP</span>
        </div>

        {/* banner */}
        <div className={styles.bannerWrap}>
          <div className={styles.bannerImg}>
            <div className={styles.bannerText}>
              <span>使用攒钱</span>
              <span>控制过剩消费欲</span>
              <span>该给自己点动力，抢播自己去作个计划，逼着自己存点钱。掌控平日里膨胀的消费主义观念，掌控自己的重点攒钱计划。当然，我们“攒钱”就是你不二的选择。</span>
              <span onClick={downApp}>下载 攒钱</span>
              <span>
                <img src="https://r.51gjj.com/webpublic/images/2020630/OE8MpJbragb64.png" alt="" />
                <i>完全终身免费</i>
              </span>
            </div>
          </div>
        </div>

        {/* list */}
        <div className={styles.listWrap}>
          {iconList && iconList.map(item => (
            <div className={styles.listItem} key={item.key}>
              <img src={item.img} alt="" />
              <span className={styles.itemTitle}>{item.title}</span>
              <span className={styles.itemDec}>{item.description}</span>
            </div>
          ))}
        </div>

        {/* footer */}
        <div className={styles.footerWrap}>
          <span>攒钱 是我们对过分消费主义最大的努力</span>
          <span>也想让您同我们一起克制，减少狂热的欲望，进行正确的行为</span>
          <span>尚未注册账户？</span>
          <span onClick={downApp}>点我下载 App</span>
        </div>

        {/* copyright */}
        <div className={styles.copyrightWrap}>
          <div className={styles.copyrightTop}>
            <span>·隐私政策</span>
            <span>·用户协议</span>
          </div>
          <div className={styles.copyrightBottom}>
            <span>Copyright ©杭州煎饼网络技术有限公司</span>
            <span>浙ICP备10046444号 | 浙公网安备 11010802020134号 | 浙ICP证110507号</span>
          </div>
        </div>
      </div>
    </DocumentTitle>
  )
}

export default SaveMoney;

