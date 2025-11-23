import { Holiday } from '@/types';

export const holidays: Holiday[] = [
  // ========== 1月 ==========
  {
    id: '1',
    date: '2026-01-01',
    year: '2026',
    country: '全球',
    chineseName: '元旦',
    englishName: 'New Year\'s Day',
    region: '北美洲',
    type: '公共假日',
    duration: '1-3天',
    impact: '全球性假期，大部分企业放假，适合发送新年问候和年度合作计划。',
    suggestions: [
      '发送新年问候邮件',
      '确认客户新一年采购预算',
      '避免假期期间催促订单'
    ],
    greetingZh: '新年快乐，期待新一年的合作！',
    greetingEn: 'Happy New Year! Looking forward to our continued cooperation in 2026.',
    avoidColdEmail: true,
  },
  {
    id: '2',
    date: '2026-01-19',
    year: '2026',
    country: '美国',
    chineseName: '马丁·路德·金纪念日',
    englishName: 'Martin Luther King Jr. Day',
    region: '北美洲',
    type: '公共假日',
    duration: '1天',
    impact: '美国联邦假日，政府和部分企业放假，银行、邮政服务暂停。',
    suggestions: [
      '避免当天发送紧急邮件',
      '提前确认美国客户假期安排'
    ],
    greetingZh: '祝您假期愉快！',
    greetingEn: 'Enjoy your holiday!',
    avoidColdEmail: true,
  },
  {
    id: '3',
    date: '2026-01-26',
    year: '2026',
    country: '澳大利亚',
    chineseName: '澳大利亚国庆日',
    englishName: 'Australia Day',
    region: '大洋洲',
    type: '公共假日',
    duration: '1天',
    impact: '澳洲全国放假，企业和政府机构关闭。',
    suggestions: [
      '避免当天联系澳洲客户',
      '提前确认订单和发货计划'
    ],
    greetingZh: '祝您国庆日快乐！',
    greetingEn: 'Happy Australia Day!',
    avoidColdEmail: true,
  },

  // ========== 2月 ==========
  {
    id: '4',
    date: '2026-02-17',
    year: '2026',
    country: '中国/东南亚',
    chineseName: '春节（马年）',
    englishName: 'Chinese New Year (Year of the Horse)',
    region: '亚洲',
    type: '公共假日',
    duration: '7-15天',
    impact: '工厂全面停工，供应链中断，工人返乡，节后复工可能需要缓冲期。',
    suggestions: [
      '提前1个月告知客户放假时间',
      '节前完成所有出货，避免滞留',
      '提前备货应对节后生产高峰',
      '预留2周以上的复工缓冲期'
    ],
    greetingZh: '马年大吉，万事如意！恭喜发财！',
    greetingEn: 'Happy Chinese New Year! Wishing you prosperity in the Year of the Horse.',
    avoidColdEmail: true,
  },
  {
    id: '5',
    date: '2026-02-16',
    year: '2026',
    country: '美国',
    chineseName: '总统日',
    englishName: 'Presidents\' Day',
    region: '北美洲',
    type: '公共假日',
    duration: '1天',
    impact: '美国联邦假日，零售业可能有促销活动。',
    suggestions: [
      '关注零售客户的促销补货需求',
      '避免假期当天催单'
    ],
    greetingZh: '祝您假期愉快！',
    greetingEn: 'Happy Presidents\' Day!',
    avoidColdEmail: true,
  },

  // ========== 3月 ==========
  {
    id: '6',
    date: '2026-03-01',
    year: '2026',
    country: '韩国',
    chineseName: '三一节',
    englishName: 'Independence Movement Day',
    region: '亚洲',
    type: '公共假日',
    duration: '1天',
    impact: '韩国国家假日，企业和政府机构放假。',
    suggestions: [
      '避免当天联系韩国客户',
      '提前确认订单进度'
    ],
    greetingZh: '祝您节日快乐！',
    greetingEn: 'Happy Independence Movement Day!',
    avoidColdEmail: true,
  },
  {
    id: '7',
    date: '2026-03-17',
    year: '2026',
    country: '爱尔兰',
    chineseName: '圣帕特里克节',
    englishName: 'St. Patrick\'s Day',
    region: '欧洲',
    type: '公共假日',
    duration: '1天',
    impact: '爱尔兰和部分欧美国家放假，庆祝活动多。',
    suggestions: [
      '可发送节日祝福维护客情',
      '避免假期当天发送业务邮件'
    ],
    greetingZh: '圣帕特里克节快乐！',
    greetingEn: 'Happy St. Patrick\'s Day!',
    avoidColdEmail: true,
  },

  // ========== 4月 ==========
  {
    id: '8',
    date: '2026-04-03',
    year: '2026',
    country: '欧美',
    chineseName: '耶稣受难日',
    englishName: 'Good Friday',
    region: '欧洲',
    type: '宗教节日',
    duration: '1天',
    impact: '欧美基督教国家放假，银行和企业关闭。',
    suggestions: [
      '避免周五至周一（复活节）期间催单',
      '提前确认客户休假安排'
    ],
    greetingZh: '祝您复活节快乐！',
    greetingEn: 'Happy Easter!',
    avoidColdEmail: true,
  },
  {
    id: '9',
    date: '2026-04-05',
    year: '2026',
    country: '欧美/澳洲',
    chineseName: '复活节',
    englishName: 'Easter Sunday',
    region: '欧洲',
    type: '宗教节日',
    duration: '4天（含周末和周一）',
    impact: '西方国家重要假期，物流、清关可能延迟。',
    suggestions: [
      '提前2周确认订单和物流安排',
      '发送节日贺卡维护客情',
      '避免假期周催促客户'
    ],
    greetingZh: '祝您和家人复活节快乐！',
    greetingEn: 'Wishing you and your family a blessed Easter!',
    avoidColdEmail: true,
  },
  {
    id: '10',
    date: '2026-04-29',
    year: '2026',
    country: '日本',
    chineseName: '昭和之日（黄金周开始）',
    englishName: 'Showa Day (Golden Week Starts)',
    region: '亚洲',
    type: '公共假日',
    duration: '7-10天（黄金周）',
    impact: '日本黄金周，全国放假，工厂停工，物流延迟。',
    suggestions: [
      '提前3周确认订单和发货计划',
      '避免4月末至5月初联系客户',
      '预留假后复工缓冲期'
    ],
    greetingZh: '祝您黄金周假期愉快！',
    greetingEn: 'Enjoy your Golden Week holiday!',
    avoidColdEmail: true,
  },

  // ========== 5月 ==========
  {
    id: '11',
    date: '2026-05-01',
    year: '2026',
    country: '欧洲/中国/南美',
    chineseName: '国际劳动节',
    englishName: 'International Workers\' Day',
    region: '欧洲',
    type: '公共假日',
    duration: '1-5天不等',
    impact: '全球多国放假，欧洲、中国、南美尤其重视，部分地区有游行。',
    suggestions: [
      '提前确认各国客户放假天数',
      '避开假期期间，正常跟进即可'
    ],
    greetingZh: '劳动节快乐！',
    greetingEn: 'Happy Labor Day!',
    avoidColdEmail: true,
  },
  {
    id: '12',
    date: '2026-05-25',
    year: '2026',
    country: '美国',
    chineseName: '阵亡将士纪念日',
    englishName: 'Memorial Day',
    region: '北美洲',
    type: '公共假日',
    duration: '3天（含周末）',
    impact: '美国夏季正式开始，零售旺季启动，企业放假。',
    suggestions: [
      '关注零售客户夏季库存需求',
      '避免假期长周末催单'
    ],
    greetingZh: '祝您假期愉快！',
    greetingEn: 'Happy Memorial Day Weekend!',
    avoidColdEmail: true,
  },

  // ========== 6月 ==========
  {
    id: '13',
    date: '2026-06-19',
    year: '2026',
    country: '中国',
    chineseName: '端午节',
    englishName: 'Dragon Boat Festival',
    region: '亚洲',
    type: '公共假日',
    duration: '3天',
    impact: '中国传统节日，工厂放假3天，物流可能延迟。',
    suggestions: [
      '提前1周确认订单状态',
      '避免假期期间催单'
    ],
    greetingZh: '端午安康，万事顺意！',
    greetingEn: 'Happy Dragon Boat Festival!',
    avoidColdEmail: true,
  },

  // ========== 7月 ==========
  {
    id: '14',
    date: '2026-07-01',
    year: '2026',
    country: '加拿大',
    chineseName: '加拿大国庆日',
    englishName: 'Canada Day',
    region: '北美洲',
    type: '公共假日',
    duration: '1天',
    impact: '加拿大全国放假，企业和政府机构关闭。',
    suggestions: [
      '避免当天联系加拿大客户',
      '提前确认订单安排'
    ],
    greetingZh: '祝您国庆日快乐！',
    greetingEn: 'Happy Canada Day!',
    avoidColdEmail: true,
  },
  {
    id: '15',
    date: '2026-07-04',
    year: '2026',
    country: '美国',
    chineseName: '独立日',
    englishName: 'Independence Day',
    region: '北美洲',
    type: '公共假日',
    duration: '1天（通常连周末）',
    impact: '美国重要假期，夏季休假高峰期，企业和政府放假。',
    suggestions: [
      '提前2周确认客户夏季休假计划',
      '避免假期前后一周催单',
      '关注零售客户促销备货需求'
    ],
    greetingZh: '祝您独立日快乐！',
    greetingEn: 'Happy Fourth of July!',
    avoidColdEmail: true,
  },

  // ========== 8月 ==========
  {
    id: '16',
    date: '2026-08-15',
    year: '2026',
    country: '韩国',
    chineseName: '光复节',
    englishName: 'Liberation Day',
    region: '亚洲',
    type: '公共假日',
    duration: '1天',
    impact: '韩国国家假日，纪念独立，企业放假。',
    suggestions: [
      '避免当天联系韩国客户',
      '提前确认订单和物流'
    ],
    greetingZh: '祝您节日快乐！',
    greetingEn: 'Happy Liberation Day!',
    avoidColdEmail: true,
  },

  // ========== 9月 ==========
  {
    id: '17',
    date: '2026-09-07',
    year: '2026',
    country: '美国',
    chineseName: '劳工节',
    englishName: 'Labor Day',
    region: '北美洲',
    type: '公共假日',
    duration: '3天（含周末）',
    impact: '美国夏季正式结束，返校季和秋季采购开始。',
    suggestions: [
      '关注返校季和秋季产品需求',
      '避免假期长周末催单'
    ],
    greetingZh: '祝您劳工节快乐！',
    greetingEn: 'Happy Labor Day!',
    avoidColdEmail: true,
  },

  // ========== 9月 ==========
  {
    id: '18',
    date: '2026-09-25',
    year: '2026',
    country: '中国',
    chineseName: '中秋节',
    englishName: 'Mid-Autumn Festival',
    region: '亚洲',
    type: '公共假日',
    duration: '3天',
    impact: '中国传统节日，工厂放假，物流可能延迟。',
    suggestions: [
      '提前1周确认订单进度',
      '发送节日祝福维护客情'
    ],
    greetingZh: '中秋快乐，阖家团圆！',
    greetingEn: 'Happy Mid-Autumn Festival!',
    avoidColdEmail: true,
  },
  {
    id: '19',
    date: '2026-10-01',
    year: '2026',
    country: '中国',
    chineseName: '国庆节',
    englishName: 'National Day',
    region: '亚洲',
    type: '公共假日',
    duration: '7天（黄金周）',
    impact: '中国国庆黄金周，全国放假7天，工厂停工，物流严重延迟。',
    suggestions: [
      '提前3周安排好所有订单',
      '避免国庆周催促供应商',
      '预留假后至少1周复工缓冲期'
    ],
    greetingZh: '祝祖国繁荣昌盛，国庆快乐！',
    greetingEn: 'Happy National Day!',
    avoidColdEmail: true,
  },
  {
    id: '20',
    date: '2026-10-12',
    year: '2026',
    country: '美国',
    chineseName: '哥伦布日',
    englishName: 'Columbus Day',
    region: '北美洲',
    type: '公共假日',
    duration: '1天',
    impact: '美国联邦假日，部分企业和政府机构放假。',
    suggestions: [
      '提前确认客户是否放假',
      '避免假期当天发送紧急邮件'
    ],
    greetingZh: '祝您假期愉快！',
    greetingEn: 'Happy Columbus Day!',
    avoidColdEmail: true,
  },
  {
    id: '21',
    date: '2026-10-31',
    year: '2026',
    country: '美国/欧洲',
    chineseName: '万圣节',
    englishName: 'Halloween',
    region: '北美洲',
    type: '商业敏感日期',
    duration: '1天',
    impact: '美国重要商业节日，零售业销售旺季，节日装饰和糖果需求大。',
    suggestions: [
      '提前2个月备货零售类产品',
      '关注客户的节日促销计划',
      '适合发送节日主题营销邮件'
    ],
    greetingZh: '万圣节快乐！',
    greetingEn: 'Happy Halloween!',
    avoidColdEmail: false,
  },

  // ========== 11月 ==========
  {
    id: '22',
    date: '2026-11-11',
    year: '2026',
    country: '中国/全球电商',
    chineseName: '双十一购物节',
    englishName: 'Singles\' Day Shopping Festival',
    region: '亚洲',
    type: '商业敏感日期',
    duration: '1-3天（促销季）',
    impact: '全球最大购物节，电商销售爆发，物流高峰，仓库爆满。',
    suggestions: [
      '提前3个月备货电商客户',
      '关注库存补货需求',
      '物流时效可能延长2-3周'
    ],
    greetingZh: '双十一大卖！',
    greetingEn: 'Wishing you a successful Singles\' Day!',
    avoidColdEmail: false,
  },
  {
    id: '23',
    date: '2026-11-11',
    year: '2026',
    country: '美国',
    chineseName: '退伍军人节',
    englishName: 'Veterans Day',
    region: '北美洲',
    type: '公共假日',
    duration: '1天',
    impact: '美国联邦假日，政府和银行放假，部分企业继续营业。',
    suggestions: [
      '提前确认客户是否放假',
      '避免假期当天催单'
    ],
    greetingZh: '向退伍军人致敬！',
    greetingEn: 'Happy Veterans Day!',
    avoidColdEmail: true,
  },
  {
    id: '24',
    date: '2026-11-26',
    year: '2026',
    country: '美国',
    chineseName: '感恩节',
    englishName: 'Thanksgiving Day',
    region: '北美洲',
    type: '公共假日',
    duration: '4天（含周末）',
    impact: '美国传统大节，几乎所有企业放假，开启年末购物季（黑五）。',
    suggestions: [
      '提前2周确认订单和物流',
      '适合发送感谢信维护客情',
      '关注零售客户黑五备货需求'
    ],
    greetingZh: '感谢您一直以来的支持，祝您感恩节快乐！',
    greetingEn: 'Thank you for your continued support. Happy Thanksgiving!',
    avoidColdEmail: true,
  },
  {
    id: '25',
    date: '2026-11-27',
    year: '2026',
    country: '美国/全球',
    chineseName: '黑色星期五',
    englishName: 'Black Friday',
    region: '北美洲',
    type: '商业敏感日期',
    duration: '1-4天（延续至网一）',
    impact: '全球最大购物季，零售业销售爆发，物流高峰，补货需求激增。',
    suggestions: [
      '提前3个月备货零售客户',
      '关注客户促销计划和紧急补货',
      '物流时效延长，预留缓冲期',
      '适合跟进订单和促销支持'
    ],
    greetingZh: '祝您黑五大卖！',
    greetingEn: 'Wishing you a successful Black Friday!',
    avoidColdEmail: false,
  },
  {
    id: '26',
    date: '2026-11-30',
    year: '2026',
    country: '美国/全球',
    chineseName: '网购星期一',
    englishName: 'Cyber Monday',
    region: '北美洲',
    type: '商业敏感日期',
    duration: '1天',
    impact: '线上购物高峰，电商销售爆发，物流持续繁忙。',
    suggestions: [
      '关注电商客户紧急补货需求',
      '确保库存充足',
      '物流延迟仍在持续，提前沟通'
    ],
    greetingZh: '网一大卖！',
    greetingEn: 'Happy Cyber Monday!',
    avoidColdEmail: false,
  },

  // ========== 12月 ==========
  {
    id: '27',
    date: '2026-12-12',
    year: '2026',
    country: '中国/全球电商',
    chineseName: '双十二购物节',
    englishName: '12.12 Shopping Festival',
    region: '亚洲',
    type: '商业敏感日期',
    duration: '1-3天',
    impact: '继双十一后的第二次电商促销季，补货需求高。',
    suggestions: [
      '关注电商客户补货需求',
      '确保库存充足',
      '物流仍在高峰期，注意时效'
    ],
    greetingZh: '双十二大卖！',
    greetingEn: 'Happy 12.12 Shopping Festival!',
    avoidColdEmail: false,
  },
  {
    id: '28',
    date: '2026-12-25',
    year: '2026',
    country: '美国/欧洲/澳洲',
    chineseName: '圣诞节',
    englishName: 'Christmas Day',
    region: '欧洲',
    type: '公共假日',
    duration: '3-7天（通常连元旦）',
    impact: '西方国家年度最重要节日，几乎所有企业放假，物流停运，海关清关严重延迟。',
    suggestions: [
      '提前3-4周确认所有订单',
      '避免圣诞周发送业务邮件',
      '发送节日贺卡维护客情',
      '预留假后至少1周复工时间'
    ],
    greetingZh: '祝您和家人圣诞快乐，新年吉祥！',
    greetingEn: 'Wishing you and your family a Merry Christmas and a Happy New Year!',
    avoidColdEmail: true,
  },
  {
    id: '29',
    date: '2026-12-26',
    year: '2026',
    country: '英国/加拿大/澳洲',
    chineseName: '节礼日',
    englishName: 'Boxing Day',
    region: '欧洲',
    type: '公共假日',
    duration: '1天',
    impact: '英联邦国家假日，零售业大促销，类似黑五。',
    suggestions: [
      '关注英联邦客户促销需求',
      '避免假期当天催单',
      '适合跟进促销后补货'
    ],
    greetingZh: '节礼日快乐！',
    greetingEn: 'Happy Boxing Day!',
    avoidColdEmail: true,
  },

  // ========== 额外重要节日 ==========
  {
    id: '30',
    date: '2026-02-17',
    year: '2026',
    country: '中东/穆斯林国家',
    chineseName: '斋月开始',
    englishName: 'Ramadan Begins',
    region: '亚洲',
    type: '宗教节日',
    duration: '30天',
    impact: '工作时间缩短，决策流程变慢，白天禁食，效率降低。',
    suggestions: [
      '避免白天安排会议或电话',
      '尊重宗教习俗，上午沟通较好',
      '物流清关效率会降低20-30%',
      '决策可能延迟，提前规划'
    ],
    greetingZh: '祝您斋月吉庆！',
    greetingEn: 'Ramadan Kareem!',
    avoidColdEmail: false,
  },
  {
    id: '31',
    date: '2026-03-20',
    year: '2026',
    country: '中东/穆斯林国家',
    chineseName: '开斋节',
    englishName: 'Eid al-Fitr',
    region: '亚洲',
    type: '宗教节日',
    duration: '3-5天',
    impact: '穆斯林国家最重要节日之一，全国放假，企业停工。',
    suggestions: [
      '提前2周确认订单和物流',
      '发送节日祝福维护客情',
      '避免假期周催单'
    ],
    greetingZh: '开斋节快乐！',
    greetingEn: 'Eid Mubarak!',
    avoidColdEmail: true,
  },
  {
    id: '32',
    date: '2026-06-06',
    year: '2026',
    country: '中东/穆斯林国家',
    chineseName: '古尔邦节',
    englishName: 'Eid al-Adha',
    region: '非洲',
    type: '宗教节日',
    duration: '4-5天',
    impact: '穆斯林国家重大节日，全国放假，朝觐季节。',
    suggestions: [
      '提前2周确认订单安排',
      '发送节日祝福',
      '避免假期期间催单'
    ],
    greetingZh: '古尔邦节快乐！',
    greetingEn: 'Eid al-Adha Mubarak!',
    avoidColdEmail: true,
  },
  {
    id: '33',
    date: '2026-10-19',
    year: '2026',
    country: '印度',
    chineseName: '排灯节',
    englishName: 'Diwali',
    region: '亚洲',
    type: '宗教节日',
    duration: '5天',
    impact: '印度最重要节日，全国放假，工厂停工，物流延迟。',
    suggestions: [
      '提前3周确认订单和发货',
      '发送节日祝福维护客情',
      '预留假后复工缓冲期'
    ],
    greetingZh: '排灯节快乐，愿光明照亮您的前程！',
    greetingEn: 'Happy Diwali! May the festival of lights brighten your life!',
    avoidColdEmail: true,
  },
  {
    id: '34',
    date: '2026-09-21',
    year: '2026',
    country: '韩国',
    chineseName: '中秋节（韩国）',
    englishName: 'Chuseok',
    region: '亚洲',
    type: '公共假日',
    duration: '3天',
    impact: '韩国传统节日，全国放假，工厂停工，物流延迟。',
    suggestions: [
      '提前2周确认订单状态',
      '发送节日祝福',
      '避免假期期间催单'
    ],
    greetingZh: '中秋快乐！',
    greetingEn: 'Happy Chuseok!',
    avoidColdEmail: true,
  },

  // ========== 新增国家节假日 ==========

  // 巴西狂欢节
  {
    id: '35',
    date: '2026-02-16',
    year: '2026',
    country: '巴西',
    chineseName: '狂欢节',
    englishName: 'Carnival',
    region: '南美洲',
    type: '公共假日',
    duration: '4天（2月13-17日）',
    impact: '巴西最盛大的节日，政府和企业放假，全国陷入狂欢，物流几乎停滞。',
    suggestions: [
      '提前3周确认所有订单和发货',
      '假期期间避免联系客户',
      '预留假后1周恢复业务',
      '注意里约热内卢等主要城市交通瘫痪'
    ],
    greetingZh: '狂欢节快乐！',
    greetingEn: 'Happy Carnival!',
    avoidColdEmail: true,
  },

  // 哈萨克斯坦纳乌鲁斯节
  {
    id: '36',
    date: '2026-03-21',
    year: '2026',
    country: '哈萨克斯坦',
    chineseName: '纳乌鲁斯节',
    englishName: 'Nauryz',
    region: '亚洲',
    type: '公共假日',
    duration: '3天（3月21-23日）',
    impact: '哈萨克斯坦最重要节日，庆祝春分和新年，全国放假3天，企业停工。',
    suggestions: [
      '提前2周确认订单和物流',
      '发送节日祝福维护中亚客户关系',
      '避免假期期间催单'
    ],
    greetingZh: '纳乌鲁斯节快乐！',
    greetingEn: 'Happy Nauryz!',
    avoidColdEmail: true,
  },

  // 印尼宁静日
  {
    id: '37',
    date: '2026-03-19',
    year: '2026',
    country: '印度尼西亚（巴厘岛）',
    chineseName: '宁静日',
    englishName: 'Nyepi (Balinese Day of Silence)',
    region: '亚洲',
    type: '宗教节日',
    duration: '1天',
    impact: '巴厘岛完全停摆，无航班、无车辆、无公共活动，全岛禁止外出。',
    suggestions: [
      '提前告知客户巴厘岛完全关闭',
      '避免当天联系巴厘岛客户',
      '如有巴厘岛业务，提前规划绕行方案'
    ],
    greetingZh: '宁静日平安！',
    greetingEn: 'Happy Nyepi!',
    avoidColdEmail: true,
  },

  // 泰国宋干节
  {
    id: '38',
    date: '2026-04-13',
    year: '2026',
    country: '泰国',
    chineseName: '宋干节（泼水节）',
    englishName: 'Songkran (Thai New Year)',
    region: '亚洲',
    type: '公共假日',
    duration: '3天（4月13-15日）',
    impact: '泰国传统新年，全国放假，银行和政府机构关闭，旅游业高峰。',
    suggestions: [
      '提前2周确认订单状态',
      '避免假期期间发送紧急邮件',
      '注意曼谷、清迈等城市交通拥堵'
    ],
    greetingZh: '宋干节快乐！',
    greetingEn: 'Happy Songkran!',
    avoidColdEmail: true,
  },

  // 新加坡卫塞节
  {
    id: '39',
    date: '2026-05-31',
    year: '2026',
    country: '新加坡',
    chineseName: '卫塞节',
    englishName: 'Vesak Day',
    region: '亚洲',
    type: '宗教节日',
    duration: '1天（6月1日补假）',
    impact: '庆祝佛诞，新加坡公共假日，政府和银行放假。',
    suggestions: [
      '注意6月1日（周一）为补假',
      '避免假期当天催单',
      '可发送节日问候'
    ],
    greetingZh: '卫塞节快乐！',
    greetingEn: 'Happy Vesak Day!',
    avoidColdEmail: true,
  },

  // 墨西哥亡灵节
  {
    id: '40',
    date: '2026-11-02',
    year: '2026',
    country: '墨西哥',
    chineseName: '亡灵节',
    englishName: 'Day of the Dead (Día de Muertos)',
    region: '北美洲',
    type: '公共假日',
    duration: '2天（11月1-2日）',
    impact: '墨西哥传统节日，11月2日为公共假日，银行和企业关闭。',
    suggestions: [
      '避免11月2日联系墨西哥客户',
      '可发送节日祝福维护客情',
      '注意11月1日部分企业也可能休息'
    ],
    greetingZh: '亡灵节快乐！',
    greetingEn: 'Feliz Día de Muertos!',
    avoidColdEmail: true,
  },

  // 埃及一月革命纪念日
  {
    id: '41',
    date: '2026-01-25',
    year: '2026',
    country: '埃及',
    chineseName: '一月革命纪念日',
    englishName: 'Revolution Day (January 25)',
    region: '非洲',
    type: '公共假日',
    duration: '1天',
    impact: '埃及国家法定假日，政府机构、银行和多数企业放假。',
    suggestions: [
      '避免1月25日联系埃及客户',
      '提前确认订单和物流安排',
      '可发送节日问候维护客情'
    ],
    greetingZh: '革命纪念日快乐！',
    greetingEn: 'Happy Revolution Day!',
    avoidColdEmail: true,
  },

  // 阿根廷狂欢节
  {
    id: '42',
    date: '2026-02-16',
    year: '2026',
    country: '阿根廷',
    chineseName: '狂欢节',
    englishName: 'Carnival',
    region: '南美洲',
    type: '公共假日',
    duration: '2天（2月16-17日）',
    impact: '阿根廷全国性假日，政府和企业放假，街头庆祝活动盛大。',
    suggestions: [
      '避免2月16-17日联系客户',
      '提前2周确认订单进度',
      '节后跟进可能延迟1-2天'
    ],
    greetingZh: '狂欢节快乐！',
    greetingEn: 'Feliz Carnaval!',
    avoidColdEmail: true,
  },

  // 越南春节
  {
    id: '43',
    date: '2026-02-17',
    year: '2026',
    country: '越南',
    chineseName: '春节（马年）',
    englishName: 'Tet Nguyen Dan (Year of the Horse)',
    region: '亚洲',
    type: '公共假日',
    duration: '9天（2月14-22日）',
    impact: '越南最重要节日，工厂停工9天，物流全面停滞，节后复工需缓冲期。',
    suggestions: [
      '提前1个月确认生产和发货计划',
      '避免2月14-22日期间催单',
      '节后复工可能延迟至2月底',
      '提前备货应对春节生产空档'
    ],
    greetingZh: '新年快乐！万事如意！',
    greetingEn: 'Chúc Mừng Năm Mới! Happy Tet!',
    avoidColdEmail: true,
  },

  // 菲律宾人民力量革命纪念日
  {
    id: '44',
    date: '2026-02-25',
    year: '2026',
    country: '菲律宾',
    chineseName: '人民力量革命纪念日',
    englishName: 'EDSA People Power Revolution',
    region: '亚洲',
    type: '公共假日',
    duration: '1天（特殊工作日）',
    impact: '菲律宾特殊工作日，政府机构放假，部分企业可能正常运营。',
    suggestions: [
      '确认客户是否放假',
      '避免当天发送重要邮件',
      '非紧急事务可推迟至2月26日'
    ],
    greetingZh: '革命纪念日快乐！',
    greetingEn: 'Happy EDSA Day!',
    avoidColdEmail: true,
  },

  // 捷克复活节星期一
  {
    id: '45',
    date: '2026-04-06',
    year: '2026',
    country: '捷克',
    chineseName: '复活节星期一',
    englishName: 'Easter Monday',
    region: '欧洲',
    type: '公共假日',
    duration: '4天（含周末4月3-6日）',
    impact: '捷克银行假日，配合周末形成4天长假，企业多数放假。',
    suggestions: [
      '避免4月3-6日联系捷克客户',
      '提前1周确认订单状态',
      '可发送复活节祝福'
    ],
    greetingZh: '复活节快乐！',
    greetingEn: 'Happy Easter!',
    avoidColdEmail: true,
  },

  // 南非自由日
  {
    id: '46',
    date: '2026-04-27',
    year: '2026',
    country: '南非',
    chineseName: '自由日',
    englishName: 'Freedom Day',
    region: '非洲',
    type: '公共假日',
    duration: '1天',
    impact: '南非国家法定假日，纪念首次民主选举，政府和企业放假。',
    suggestions: [
      '避免4月27日联系南非客户',
      '提前确认订单和物流时效',
      '可发送节日问候'
    ],
    greetingZh: '自由日快乐！',
    greetingEn: 'Happy Freedom Day!',
    avoidColdEmail: true,
  },

  // 波兰宪法日
  {
    id: '47',
    date: '2026-05-03',
    year: '2026',
    country: '波兰',
    chineseName: '宪法日',
    englishName: 'Constitution Day',
    region: '欧洲',
    type: '公共假日',
    duration: '1天',
    impact: '波兰国家法定假日，政府机构和企业放假。',
    suggestions: [
      '避免5月3日联系波兰客户',
      '5月1日劳动节+5月3日宪法日可能形成长假',
      '提前确认节日期间安排'
    ],
    greetingZh: '宪法日快乐！',
    greetingEn: 'Happy Constitution Day!',
    avoidColdEmail: true,
  },

  // 俄罗斯胜利日
  {
    id: '48',
    date: '2026-05-09',
    year: '2026',
    country: '俄罗斯',
    chineseName: '胜利日',
    englishName: 'Victory Day',
    region: '欧洲',
    type: '公共假日',
    duration: '3-4天（含周末可能调休）',
    impact: '俄罗斯最重要节日之一，全国性庆祝，企业和政府机构放假。',
    suggestions: [
      '避免5月9日前后联系俄罗斯客户',
      '提前2周确认订单和发货计划',
      '尊重历史意义，发送适当祝福'
    ],
    greetingZh: '胜利日快乐！',
    greetingEn: 'С Днём Победы! (Happy Victory Day!)',
    avoidColdEmail: true,
  },

  // 土耳其古尔邦节
  {
    id: '49',
    date: '2026-05-27',
    year: '2026',
    country: '土耳其',
    chineseName: '古尔邦节（宰牲节）',
    englishName: 'Kurban Bayramı (Eid al-Adha)',
    region: '欧洲',
    type: '宗教节日',
    duration: '4天（5月27-30日）',
    impact: '伊斯兰教重要节日，土耳其全国放假4天，企业停工。',
    suggestions: [
      '避免5月27-30日联系土耳其客户',
      '提前2周确认生产和发货安排',
      '节后复工可能延迟1-2天',
      '发送节日祝福维护客情'
    ],
    greetingZh: '古尔邦节快乐！',
    greetingEn: 'İyi Bayramlar! (Happy Eid al-Adha!)',
    avoidColdEmail: true,
  },

  // 阿根廷独立日
  {
    id: '50',
    date: '2026-07-09',
    year: '2026',
    country: '阿根廷',
    chineseName: '独立日',
    englishName: 'Independence Day',
    region: '南美洲',
    type: '公共假日',
    duration: '1天（可能形成长周末）',
    impact: '阿根廷国庆日，政府机构和企业放假，可能与周末形成长假。',
    suggestions: [
      '避免7月9日联系阿根廷客户',
      '提前确认订单进度',
      '可发送独立日祝福'
    ],
    greetingZh: '独立日快乐！',
    greetingEn: 'Feliz Día de la Independencia!',
    avoidColdEmail: true,
  },

  // 埃及七月革命纪念日
  {
    id: '51',
    date: '2026-07-23',
    year: '2026',
    country: '埃及',
    chineseName: '七月革命纪念日',
    englishName: 'Revolution Day (July 23)',
    region: '非洲',
    type: '公共假日',
    duration: '1天',
    impact: '埃及国家法定假日，政府机构和企业放假。',
    suggestions: [
      '避免7月23日联系埃及客户',
      '提前确认订单和物流安排',
      '可发送节日问候'
    ],
    greetingZh: '革命纪念日快乐！',
    greetingEn: 'Happy Revolution Day!',
    avoidColdEmail: true,
  },

  // 智利独立日
  {
    id: '52',
    date: '2026-09-18',
    year: '2026',
    country: '智利',
    chineseName: '独立日（国庆日）',
    englishName: 'Independence Day (Fiestas Patrias)',
    region: '南美洲',
    type: '公共假日',
    duration: '2天（9月18-19日，不可放弃假日）',
    impact: '智利最重要节日，全国庆祝，企业和政府机构放假2天。',
    suggestions: [
      '避免9月18-19日联系智利客户',
      '提前2周确认订单和物流安排',
      '节后可能有缓冲期，预留时间'
    ],
    greetingZh: '国庆日快乐！',
    greetingEn: 'Felices Fiestas Patrias!',
    avoidColdEmail: true,
  },

  // 土耳其共和国日
  {
    id: '53',
    date: '2026-10-29',
    year: '2026',
    country: '土耳其',
    chineseName: '共和国日',
    englishName: 'Republic Day',
    region: '欧洲',
    type: '公共假日',
    duration: '1天（可能调休形成长假）',
    impact: '土耳其国庆日，全国庆祝，政府机构和企业放假。',
    suggestions: [
      '避免10月29日联系土耳其客户',
      '可能与周末形成长假，提前确认',
      '发送国庆祝福维护客情'
    ],
    greetingZh: '共和国日快乐！',
    greetingEn: 'Cumhuriyet Bayramınız Kutlu Olsun!',
    avoidColdEmail: true,
  },
];

export const years = ['2026'];
export const regions = ['北美洲', '欧洲', '亚洲', '南美洲', '非洲', '大洋洲'];
export const types = ['公共假日', '宗教节日', '商业敏感日期'];
