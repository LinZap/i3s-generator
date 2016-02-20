# I3S-Awesome Generator

i3s-awesome 是一個 [NodeJS](https://nodejs.org) 的 Package  
他能用來快速產生：
 * I3S-Database
 * I3S-Awesome
 * I3S-Framework


## Installation

在全域安裝工具

    npm install -g i3s-awesome

開啟 `gitlab.json` 設定您在 [GitLab](https://gitlab.com) 上的帳號密碼

````js
	
{
	"username": "",
	"password": ""
}
````


## Usage
將 i3s-awesome 安裝在全域底下後，可以直接在 terminal 下指令

#### Create I3S-Database
透過友善的互動過程，建立一個空的 I3S-Database

    i3s db
 
過程如下圖所示：  
![Alt text](http://163.22.21.72/fb_ac/db.gif "Create I3S-Database")
  
 
 
#### Create I3S Awesome (Front-end)
在指定的目錄下，建立一個最新版本的 I3S-Awesome

    i3s awesome [project name]

過程如下圖所示：  
![Alt text](http://163.22.21.72/fb_ac/fm.gif "Create I3S Web Framework")
 


#### Create I3S Web Framework (Back-end)
在指定的目錄下，建立一個最新版本的 I3S-Awesome

    i3s framework [project name]

 
## Why

 - 原先建立 DB 與 Framework 都十分繁複，透過 NodeJS 大量簡化這個過程
 - 使用 Git 版本控制，您可以永遠取得最新版本

