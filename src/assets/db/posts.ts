export const posts = [
  {
    id: 1,
    userInfo: {
      name: 'Alex Kuharenko',
      username: '@alexeikukharenko',
      avatar: 'https://bipbap.ru/wp-content/uploads/2017/04/0_7c779_5df17311_orig.jpg',
    },
    content: {
      img: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    },
    timestamp: {
      date: '22.06.2023',
      time: '17:15'
    },
    likes: 210,
    comments: [
      {
        id: 1,
        name: 'Denis Dudinsky',
        username: '@denis',
        avatar: 'https://imgtest.mir24.tv/uploaded/images/crops/2023/January/870x489_0x479_detail_crop_20230123163201_4b6e68c0_1117bc9161e518be12a04f5397f1e15180136d91f8c43f8c1d6ea5b370dad5cf.jpg',
        text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
        timestamp: '20.06.2023',
      },
    ],
  },
  {
    id: 2,
    userInfo: {
      name: 'Anzhelika Kuharenko',
      username: '@likactrl',
      avatar: 'https://cdn.7days.ru/pic/309/949034/1248694/86.jpg',
    },
    content: {
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
    },
    timestamp: {
      date: '20.06.2023',
      time: '13:13'
    },
    likes: 273,
    comments: [
      {
        id: 1,
        name: 'Denis Dudinsky',
        username: '@denis',
        avatar: 'https://imgtest.mir24.tv/uploaded/images/crops/2023/January/870x489_0x479_detail_crop_20230123163201_4b6e68c0_1117bc9161e518be12a04f5397f1e15180136d91f8c43f8c1d6ea5b370dad5cf.jpg',
        text: 'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.',
        timestamp: '19.06.2023',
      },
      {
        id: 2,
        name: 'Oleg Sviridov',
        username: '@sviridov_245',
        avatar: 'https://officelife.media/upload/iblock/1ff/1ffe9caab261eb2b2ef926ac9e6d68c5.jpg',
        text: 'Translations: Can you help translate this site into a foreign language ? Please email us with details if you can help.',
        timestamp: '19.06.2023',
      },
    ],
  },
  {
    id: 3,
    userInfo: {
      name: 'Elena Letova',
      username: '@elenalet',
      avatar: 'https://multifoto.ru/upload/medialibrary/b42/b421764c709bae30146ec4c2e9039ec6.png',
    },
    content: {
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Since the 1500s.',
    },
    timestamp: {
      date: '19.06.2023',
      time: '00:15'
    },
    likes: 27,
    comments: [
      {
        id: 1,
        name: 'Denis Dudinsky',
        username: '@denis',
        avatar: 'https://imgtest.mir24.tv/uploaded/images/crops/2023/January/870x489_0x479_detail_crop_20230123163201_4b6e68c0_1117bc9161e518be12a04f5397f1e15180136d91f8c43f8c1d6ea5b370dad5cf.jpg',
        text: 'All the Lorem Ipsum generators on the Internet tend to repeat predefined the Internet. It uses a dictionary of over 200 Latin words, Lorem Ipsum.',
        timestamp: '19.06.2023',
      },
      {
        id: 2,
        name: 'Oleg Sviridov',
        username: '@sviridov_245',
        avatar: 'https://officelife.media/upload/iblock/1ff/1ffe9caab261eb2b2ef926ac9e6d68c5.jpg',
        text: 'Please email us with details if you can help.',
        timestamp: '19.06.2023',
      },
      {
        id: 3,
        name: 'Grigory Star',
        username: '@grigs',
        avatar: 'https://cdn.iz.ru/sites/default/files/styles/900x600/public/photo_item-2022-10/1666271042_3.jpg?itok=wfKX8cMC',
        text: 'Translations: Can you help translate this site into a foreign language ? Please email us with details if you can help.',
        timestamp: '19.06.2023',
      },
    ],
  },
]
