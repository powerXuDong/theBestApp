import React, { useState, useEffect } from 'react';
import DocumentTitle from 'react-document-title';
import { changeFavicon } from '../../untils/index';
import styles from './index.less';

function Workplace() {
  const [iconList] = useState([{
    key: 1,
    img: '//r.51gjj.com/webpublic/images/2020630/183Bpwnbmsfcm.png',
    title: '职场名片',
    description: '认证信息，可定制名片背景，可创建多张个人名片',
  }, {
    key: 2,
    img: '//r.51gjj.com/webpublic/images/2020630/yJo2xbxxpssf.png',
    title: '创建超级简历 免费获推荐机会',
    description: '创建个人详细简历，平台免费推荐匹配岗位机会，助您职场升级',
  }, {
    key: 3,
    img: '//r.51gjj.com/webpublic/images/2020630/49zWvFffw777b.png',
    title: '工作私人便签',
    description: '可记录工作中的琐碎时间，亦可帮助记录自己的工作，数据安全保密，仅个人可见。',
  }, {
    key: 4,
    img: '//r.51gjj.com/webpublic/images/2020630/C7mwdJl3y8fcn.png',
    title: '每日心情日历',
    description: '心情纪录，保持个人工作心情好状态',
  }, {
    key: 5,
    img: '//r.51gjj.com/webpublic/images/2020630/84Dcnsrkgsm3g.png',
    title: '职场心理学',
    description: '助您摆脱工作坏心情，保持好心态助力职场提升 ',
  }, {
    key: 6,
    img: '//r.51gjj.com/webpublic/images/2020630/yDlfOhhwp3mmo.png',
    title: '军队级数据保护',
    description: '安全存储所有密码并进行组织，所有密码使用最强的加密标准（AES-256）加密和生物特征认证',
  }])

  useEffect(() => {
    changeFavicon('//r.51gjj.com/webpublic/images/2020630/lD8RKnjpz6yf9.png');
  }, [])

  function downApp() {
    document.location.href = 'https://apps.apple.com/cn/app/51%E8%81%8C%E5%9C%BA%E9%80%9A-%E8%81%8C%E5%9C%BA%E7%AE%A1%E5%AE%B6/id1515478463';
  }

  return (
    <DocumentTitle title="51职场通">
      <div className={styles.pageWrap}>
        {/* 顶部信息条 */}
        <div className={styles.headerWrap}>
          <img src="https://r.51gjj.com/webpublic/images/2020630/u00iamgf42gsj.png" alt="" />
          <span onClick={downApp}>下载APP</span>
        </div>

        {/* banner */}
        <div className={styles.bannerWrap}>
          <div className={styles.bannerImg}>
            <div className={styles.bannerText}>
              <span>职场通 助您职场不迷茫</span>
              <span>
                <i>下载 51职场通 ，能让您管理自己的更多特性的个人职业名片；</i>
                <i>使用超级简历，可创建高端建立，并由我们为您进行免费人才推荐；</i>
                <i>使用工作便签，完整记录每日工作得失，功不唐捐；</i>
                <i>职场心理学，帮助您管理心态，纠正不足。</i>
              </span>
              <span onClick={downApp}>下载APP</span>
              <span>
                <img src="https://r.51gjj.com/webpublic/images/2020630/x8Htfwq70kw0k.png" alt="" />
                <i>完全终身免费</i>
              </span>
            </div>
          </div>
        </div>

        {/* list */}
        <div className={styles.listTitle}>
          <span>产品特点</span>
        </div>
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
          <span>51职场通 我们竭力为您的职场日产服务</span>
          <span>您的职场需求，我们都会努力为您达成</span>
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

export default Workplace;

