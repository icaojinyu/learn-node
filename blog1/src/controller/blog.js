// 关心（处理）数据的层次
function getList(author, keyword) {
  // 先返回假数据（格式是正确的）
  return [
    {
      id: 1,
      title: '标题A',
      content: '内容A',
      creteTime: 1563870042056,
      author: 'zhangsan'
    },
    {
      id: 2,
      title: '标题B',
      content: '内容B',
      creteTime: 1563870100600,
      author: 'lisi'
    }
  ]
}

function getDetail(id) {
  return {
    id: 1,
    title: '标题A',
    content: '内容A',
    creteTime: 1563870042056,
    author: 'zhangsan'
  }
}

module.exports = {
  getList,
  getDetail
}