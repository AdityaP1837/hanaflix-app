import requests
from fake_useragent import UserAgent
import secrets
# import json

class HanimeBrain:
    def __init__(self):
        self.BASE_URL = "https://hanime.tv/api/v8"

    def getData(self, url):
        headers = {"X-Signature-Version": "web2", "X-Signature": secrets.token_hex(32), "User-Agent": UserAgent().random}
        response = requests.get(self.BASE_URL + url, headers=headers)
        return headers

    def getTrending(self, time, page):
        timeAll = ["daily", "weekly", "monthly", "quarterly","semi-annually", "yearly"]
        if(time in timeAll):
            url = self.BASE_URL + f"/browse-trending?time={time}&page={page}&order_by=views&ordering=desc"
            response = self.getData(url)
            return response.json()
        return 0

    def getBrowse(self):
        response = self.getData("/browse")
        return response.json()

    def getImages(self, tagArray):
        tags = [f"channel_name__in[]={tag}" for tag in tagArray ]
        tagsString = '&'.join(tags)
        url = f"https://community-uploads.highwinds-cdn.com/api/v9/community_uploads?{tagsString}&query_method=offset&__offset=0&loc=https://hanime.tv"
        response = self.getData(url)
        return response.json()

    def getBrowseTags(self, tags, page):
        url = self.BASE_URL + f"/browse/hentai-tags/{tags}?page={page}&order_by=created_at_unix&ordering=desc"
        response = self.getData(url)
        return response.json()
    
    def getVideo(self, slug):
        url = self.BASE_URL + f"/video?id={slug}"
        response = self.getData(url)
        return response.json()
    
    def getSearch(self, query, page):
        headers = {"X-Signature-Version": "web2", "X-Signature": secrets.token_hex(32), "User-Agent": UserAgent().random}
        data = {
            "search_text": query,
            "tags": [],
            "brands": [],
            "blacklist": [],
            "order_by": [],
            "ordering": [],
            "page": page
        }
        response = requests.post("https://search.htv-services.com", headers=headers, json=data)
        responseJson = response.json()
        # responseJson = {
        #     "page": responseJson["page"],
        #     "nbPages": responseJson("nbPages"),
        #     "nbHits": responseJson("nbHits"),
        #     "hitsPerPage": responseJson("hitsPerPage"),
        #     "hits": json.loads(responseJson("hits")) 
        # }
        return responseJson
