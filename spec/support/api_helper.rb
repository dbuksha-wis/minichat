module ApiHelper
  def authenticated_header(request, payload = {})
    jwt = Auth.encode(payload)
    request.headers.merge!('Authorization': "Bearer #{jwt}")
  end
end
