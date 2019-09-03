
var url = require('url')

var myUrl = new URL('http://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash')

url.parse(myUrl)  [object]

|- href [http://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash]  === myUrl.toString()
|- hash [hash]
|- host [sub.example.com:8080]
|- hostname [sub.example.com]
|- origin [http://sub.example.com:8080]
|- password [pass]
|- pathname [/p/a/t/h]
|- port [8080]
|- protpcol [http:]
|- search [?query=string]
|- searchParams [URLSearchParams { 'query' => 'string' }]
    |-- myUrl.searchParams.get('query') | getAll | has | keys | toString
    |-- myUrl.searchParams.append('abc', 'xyz)
    |-- myUrl.searchParams.delete('abc')
    |-- myUrl.searchParams.set('abc', 'xyz')
    |-- myUrl.searchParams.forEach( (value, name, searchParams) => {} )
    |-- new URLSearchParams('user=abc&query=xyz')
    |-- new URLSearchParams({ user: ['first','second'] })
|- username [user]