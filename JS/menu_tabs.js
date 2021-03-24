export default function getHTML(options)
{
    let {url, succes, error} = options
    const xhr = new XMLHttpRequest()
    xhr.addEventListener("readystatechange", function (e) {
        if(xhr.readyState !== 4) return
        if(xhr.status>=200 && xhr.status<=300){
            let html = xhr.responseText
            succes(html)
        }else{
            let message = xhr.statusText || "OCURRIO UN ERROR"
            error(`ERROR: ${xhr.status} ${message}`)
        }
    })
    xhr.open("GET",url)
    xhr.setRequestHeader("Content-type","text/html;charset=utf-8")
    xhr.send()
}

