require "./app"

run Sinatra::Application

set :public_dir, File.expand_path('../public', __FILE__)
