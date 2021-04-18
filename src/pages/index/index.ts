import * as _ from 'lodash'

// const app = getApp<IAppOption>()

Page({
  data: {
    motto: 'Hello ?',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false
  },

  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs',
    })
  },

  onLoad() {
    // @ts-ignore
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }

    this.setData({
      motto: _.join(['Hello', 'webpack'], ' '),
    })
  },

  getUserProfile() {
    wx.getUserProfile({
      desc: 'Testing',
      success: (res) => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },

  getUserInfo(e: any) {
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
