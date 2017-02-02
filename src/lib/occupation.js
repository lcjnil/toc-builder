export const specialMap = {
  social: '社交能力',
  tech: '技术能力',
  investigates: '调查能力',
  aOrS: '学术能力或者社交能力',
  sOrT: '社交能力或者技术能力',
  any: '任何能力',
};

export const specialFlatMap = {
  social: ['social'],
  tech: ['tech'],
  investigates: ['social', 'tech', 'academy'],
  aOrS: ['academy', 'social'],
  sOrT: ['social', 'tech'],
  any: ['social', 'tech', 'general', 'academy'],
};

export const occupations = {
  精神病学家: {
    credit: [3, 4],
    skills: ['生物学', '语言', '文献查阅', '医学', '药剂学', '精神分析', '察言观色'],
    other: {
      type: 'social',
      points: 2,
    }
  },

  古玩家: {
    credit: [2, 5],
    skills: ['建筑学', '艺术史', '议价' ,'历史' ,'语言' ,'法律' ,'文献查阅'],
    other: {
      type: 'investigates',
      points: 2
    }
  },

  考古学家: {
    credit: [4, 5],
    skills: ['考古学' ,'运动' ,'证物采集' ,'急救' ,'历史' ,'语言' ,'文献查阅' ,'骑术'],
    other: {
      type: 'investigates',
      points: 2
    }
  },

  艺术家: {
    credit: [1, 4],
    skills: ['建筑学' ,'艺术' ,'艺术史' ,'手艺' ,'伪装' ,'奉承' ,'摄影' ,'察言观色'],
    other: {
      type: 'aOrS',
      points: 2
    }
  },

  作家: {
    credit: [1, 3],
    skills: ['艺术' ,'历史' ,'语言' ,'文献查阅' ,'口述采访' ,'察言观色'],
    other: {
      type: 'any',
      points: 2
    }
  },

  神职人员: {
    credit: [2, 5],
    skills: ['历史' ,'语言','文献查阅' ,'精神分析' ,'察言观色' ,'安抚' ,'神学'],
    other: {
      type: 'social',
      points: 2
    }
  },

  罪犯: {
    credit: [0, 4],
    skills: ['议价' ,'威胁' ,'开锁' ,'搏击' ,'警觉' ,'追踪' ,'潜行' ,'底层社会'],
    other: {
      type: 'sOrT',
      points: 1
    }
  },

  风雅子弟: {
    credit: [3, 99],
    skills: ['信誉等级' ,'奉承' ,' 骑术'],
    other: {
      type: 'any',
      points: 5
    }
  },

  医生: {
    credit: [4, 6],
    skills: ['会计' ,'生物学' ,'急救', '法医' ,'语言(拉丁语)' ,'医 学' ,'药剂学' ,'察言观色' ,'安抚'],
  },

  流浪汉: {
    credit: [0, 0],
    skills: ['运动' ,'议价' ,'偷窃' ,' 野外求生' ,'警觉' ,'潜行' ,'底层社会'],
  },

  记者: {
    credit: [2, 4],
    skills: ['警方交谈' ,'伪装' ,' 证物采集' ,'语言' ,'口述采访' ,'摄影' ,'察言观色' ,'安抚' ,'追踪'],
    other: {
      type: 'social',
      points: 1
    }
  },

  军人: {
    credit: [2, 5],
    skills: [],
    other: {
      type: 'any',
      points: 6
    }
  },

  护士: {
    credit: [2, 4],
    skills: ['生物学' ,'急救' ,'医学' ,'药剂学' ,'察言观色', '安抚'],
    other: {
      type: 'social',
      points: 1
    }
  },

  灵异现象研究者: {
    credit: [2, 3],
    skills: ['人类学' ,'电器维修' ,'文献查阅' ,'机械维修' ,'神秘学' ,'摄影' ,'察言观色', '警觉'],
  },

  飞行员: {
    credit: [2, 3],
    skills: ['天文学' ,'驾驶' ,'电 器维修' ,'机械维修' ,'导航' ,'警觉']
  },

  警探: {
    credit: [3, 4],
    skills: ['运动' ,'警方交谈' ,' 驾驶' ,'证物采集' ,'枪械' ,'审讯' ,'法律' ,'察言观色', '警觉'],
  },

  私家侦探: {
    credit: [2, 3],
    skills: ['会计', '伪装', '驾驶' ,'法律' ,'开锁' ,'摄影' ,'察言观 色' ,'安抚' ,'搏击和追踪'],
  },

  教授: {
    credit: [3, 5],
    skills: ['官僚' ,'语言' ,'文献查阅'],
    other: {
      type: 'any',
      points: 4
    }
  },

  科学家: {
    credit: [3, 5],
    skills: ['电器维修', '证物采集' ,'语言' ,'文献查阅' ,'摄影'],
  }
};