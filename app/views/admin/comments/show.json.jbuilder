json.content simple_format(@comment.content)
json.extract! @comment, :id, :author_name, :author_email, :author_avatar, :ip, :created_at
json.blog @comment.blog, :id, :title, :slug if @comment.blog