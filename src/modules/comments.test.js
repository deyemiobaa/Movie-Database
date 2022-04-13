/**
 * @jest-environment jsdom
*/

describe('Test comments functionality', () => {
  document.body.innerHTML = `
    <div class="comment-section">
      <h3 class="comment-count">Comments</h3>
        <ul class="comment-list">
        </ul>
    </div>`
  const commentCount = () => {

  }

  const addComment = () => {
    const commentList = document.querySelector('.comment-list')
    const comment = document.createElement('li')
    comment.textContent = '02/02/2022 Test User: This is a test comment!'
    commentList.appendChild(comment)
    document.querySelector('.comment-count').textContent = `Comments (${commentList.children.length})`
  }

  test('Add a comment', () => {
    addComment()
    expect(document.querySelector('.comment-list').children.length).toBe(1)
  })

  test('Add extra comments', () => {
    addComment()
    addComment()
    expect(document.querySelector('.comment-list').children.length).toBe(3)
  })

  test('check comment count', () => {
    addComment()
    expect(document.querySelector('.comment-count').textContent).toBe('Comments (4)')
  })
});
