#!/bin/bash

script_dir_path=$(dirname $(readlink -f $0))
echo ${script_dir_path}

# listview
listview_path="/public/cgibin/listview/"
comand=$script_dir_path$listview_path"list*.cgi"
chmod 755 $comand
comand=$script_dir_path$listview_path"frame-list*.cgi"
chmod 755 $comand
comand=$script_dir_path$listview_path"upload*.cgi"
chmod 755 $comand

# calender
cal_path="/public/cgibin/cal4118/"
comand=$script_dir_path$cal_path"cal.cgi"
chmod 755 $comand

# clipmail
clipmail_path="/public/cgibin/clipmail/c1/"
cm=$script_dir_path$clipmail_path"admin.cgi"
chmod 705 $cm
cm=$script_dir_path$clipmail_path"clipmail.cgi"
chmod 705 $cm
cm=$script_dir_path$clipmail_path"temp"
chmod 707 $cm
cm=$script_dir_path$clipmail_path"data/pwd.cgi"
chmod 606 $cm
cm=$script_dir_path$clipmail_path"lib/*.*"
chmod 606 $cm


clipmail_path="/public/cgibin/clipmail/c2/"
cm=$script_dir_path$clipmail_path"admin.cgi"
chmod 705 $cm
cm=$script_dir_path$clipmail_path"clipmail.cgi"
chmod 705 $cm
cm=$script_dir_path$clipmail_path"temp"
chmod 707 $cm
cm=$script_dir_path$clipmail_path"data/pwd.cgi"
chmod 606 $cm
cm=$script_dir_path$clipmail_path"lib/*.*"
chmod 606 $cm

clipmail_path="/public/cgibin/clipmail/c3/"
cm=$script_dir_path$clipmail_path"admin.cgi"
chmod 705 $cm
cm=$script_dir_path$clipmail_path"clipmail.cgi"
chmod 705 $cm
cm=$script_dir_path$clipmail_path"temp"
chmod 707 $cm
cm=$script_dir_path$clipmail_path"data/pwd.cgi"
chmod 606 $cm
cm=$script_dir_path$clipmail_path"lib/*.*"
chmod 606 $cm

clipmail_path="/public/cgibin/clipmail/c4/"
cm=$script_dir_path$clipmail_path"admin.cgi"
chmod 705 $cm
cm=$script_dir_path$clipmail_path"clipmail.cgi"
chmod 705 $cm
cm=$script_dir_path$clipmail_path"temp"
chmod 707 $cm
cm=$script_dir_path$clipmail_path"data/pwd.cgi"
chmod 606 $cm
cm=$script_dir_path$clipmail_path"lib/*.*"
chmod 606 $cm

clipmail_path="/public/cgibin/clipmail/c5/"
cm=$script_dir_path$clipmail_path"admin.cgi"
chmod 705 $cm
cm=$script_dir_path$clipmail_path"clipmail.cgi"
chmod 705 $cm
cm=$script_dir_path$clipmail_path"temp"
chmod 707 $cm
cm=$script_dir_path$clipmail_path"data/pwd.cgi"
chmod 606 $cm
cm=$script_dir_path$clipmail_path"lib/*.*"
chmod 606 $cm

# wl-news
news_path="/public/cgibin/wl-news/"
cm=$script_dir_path$news_path"wlnews.cgi"
chmod 755 $cm
cm=$script_dir_path$news_path"lock"
chmod 777 $cm
cm=$script_dir_path$news_path"log"
chmod 777 $cm
cm=$script_dir_path$news_path"wn_tmpl"
chmod 777 $cm
cm=$script_dir_path$news_path"wn_tmpl/*.*"
chmod 777 $cm
cm=$script_dir_path$news_path"lock/lockfile"
chmod 666 $cm
cm=$script_dir_path$news_path"log/config.cgi"
chmod 666 $cm
cm=$script_dir_path$news_path"log/user_config.cgi"
chmod 666 $cm

news_path="/public/cgibin/wl-news-0/"
cm=$script_dir_path$news_path"wlnews.cgi"
chmod 755 $cm
cm=$script_dir_path$news_path"lock"
chmod 777 $cm
cm=$script_dir_path$news_path"log"
chmod 777 $cm
cm=$script_dir_path$news_path"wn_tmpl"
chmod 777 $cm
cm=$script_dir_path$news_path"wn_tmpl/*.*"
chmod 777 $cm
cm=$script_dir_path$news_path"lock/lockfile"
chmod 666 $cm
cm=$script_dir_path$news_path"log/config.cgi"
chmod 666 $cm
cm=$script_dir_path$news_path"log/user_config.cgi"
chmod 666 $cm

news_path="/public/cgibin/wl-news2/"
cm=$script_dir_path$news_path"wlnews.cgi"
chmod 755 $cm
cm=$script_dir_path$news_path"lock"
chmod 777 $cm
cm=$script_dir_path$news_path"log"
chmod 777 $cm
cm=$script_dir_path$news_path"wn_tmpl"
chmod 777 $cm
cm=$script_dir_path$news_path"wn_tmpl/*.*"
chmod 777 $cm
cm=$script_dir_path$news_path"lock/lockfile"
chmod 666 $cm
cm=$script_dir_path$news_path"log/config.cgi"
chmod 666 $cm
cm=$script_dir_path$news_path"log/user_config.cgi"
chmod 666 $cm

news_path="/public/cgibin/wl-news3/"
cm=$script_dir_path$news_path"wlnews.cgi"
chmod 755 $cm
cm=$script_dir_path$news_path"lock"
chmod 777 $cm
cm=$script_dir_path$news_path"log"
chmod 777 $cm
cm=$script_dir_path$news_path"wn_tmpl"
chmod 777 $cm
cm=$script_dir_path$news_path"wn_tmpl/*.*"
chmod 777 $cm
cm=$script_dir_path$news_path"lock/lockfile"
chmod 666 $cm
cm=$script_dir_path$news_path"log/config.cgi"
chmod 666 $cm
cm=$script_dir_path$news_path"log/user_config.cgi"
chmod 666 $cm

news_path="/public/cgibin/wl-news4/"
cm=$script_dir_path$news_path"wlnews.cgi"
chmod 755 $cm
cm=$script_dir_path$news_path"lock"
chmod 777 $cm
cm=$script_dir_path$news_path"log"
chmod 777 $cm
cm=$script_dir_path$news_path"wn_tmpl"
chmod 777 $cm
cm=$script_dir_path$news_path"wn_tmpl/*.*"
chmod 777 $cm
cm=$script_dir_path$news_path"lock/lockfile"
chmod 666 $cm
cm=$script_dir_path$news_path"log/config.cgi"
chmod 666 $cm
cm=$script_dir_path$news_path"log/user_config.cgi"
chmod 666 $cm

news_path="/public/cgibin/wl-news5/"
cm=$script_dir_path$news_path"wlnews.cgi"
chmod 755 $cm
cm=$script_dir_path$news_path"lock"
chmod 777 $cm
cm=$script_dir_path$news_path"log"
chmod 777 $cm
cm=$script_dir_path$news_path"wn_tmpl"
chmod 777 $cm
cm=$script_dir_path$news_path"wn_tmpl/*.*"
chmod 777 $cm
cm=$script_dir_path$news_path"lock/lockfile"
chmod 666 $cm
cm=$script_dir_path$news_path"log/config.cgi"
chmod 666 $cm
cm=$script_dir_path$news_path"log/user_config.cgi"
chmod 666 $cm


#cart-n
cart_path="/public/cgibin/cart-n/"
cm=$script_dir_path$cart_path"ex/*.cgi"
chmod 755 $cm
cm=$script_dir_path$cart_path"DB"
chmod 777 $cm
cm=$script_dir_path$cart_path"bill"
chmod 777 $cm
cm=$script_dir_path$cart_path"sessiondata"
chmod 777 $cm
cm=$script_dir_path$cart_path"tempCSV"
chmod 777 $cm
cm=$script_dir_path$cart_path"zaiko"
chmod 777 $cm
cm=$script_dir_path$cart_path"zaiko/*"
chmod 777 $cm
cm=$script_dir_path$cart_path"zip/getaddr.cgi"
chmod 755 $cm

#hand
hand_path="/public/cgibin/hand/"
cm=$script_dir_path$hand_path"hand.cgi"
chmod 705 $cm
cm=$script_dir_path$hand_path"hand2.cgi"
chmod 705 $cm


#memberadmin
mem_path="/public/cgibin/memberadmin/"
cm=$script_dir_path$mem_path"sessiondata"
chmod 777 $cm
cm=$script_dir_path$mem_path"*.cgi"
chmod 755 $cm
cm=$script_dir_path$mem_path"*.html"
chmod 755 $cm
cm=$script_dir_path$mem_path"*.xml"
chmod 755 $cm
cm=$script_dir_path$mem_path"class/*.pm"
chmod 755 $cm
cm=$script_dir_path$mem_path"insertScript/data"
chmod 777 $cm
cm=$script_dir_path$mem_path"crons/*.*"
chmod 755 $cm
cm=$script_dir_path$mem_path"vacuum/*.*"
chmod 755 $cm
cm=$script_dir_path$mem_path"vacuum/Devel/*.*"
chmod 755 $cm

# magacgi
magacgi_path="/public/cgibin/magacgi/"
cm=$script_dir_path$magacgi_path"addr"
chmod 757 $cm
cm=$script_dir_path$magacgi_path"*.cgi"
chmod 705 $cm

# special
special_path="/public/cgibin/special/"
cm=$script_dir_path$special_path"backup"
chmod 777 $cm
cm=$script_dir_path$special_path"datas"
chmod 777 $cm
cm=$script_dir_path$special_path"temp"
chmod 777 $cm
cm=$script_dir_path$special_path"tmpl_comp"
chmod 777 $cm
cm=$script_dir_path$special_path"cron*"
chmod 755 $cm

# csvedit
csvedit_path="/public/cgibin/csvedit/"
cm=$script_dir_path$csvedit_path"csvedit.cgi"
chmod 755 $cm

# news_reject
news_reject_path="/public/cgibin/news_reject/"
cm=$script_dir_path$news_reject_path"mimew.pl"
chmod 755 $cm
cm=$script_dir_path$news_reject_path"news_reject.cgi"
chmod 705 $cm

# order2
order2_path="/public/cgibin/order2/"
cm=$script_dir_path$order2_path"form2mail.cgi"
chmod 705 $cm
cm=$script_dir_path$order2_path"form6mail.cgi"
chmod 705 $cm

# pickup
pickup_path="/public/cgibin/pickup/"
cm=$script_dir_path$pickup_path"data"
chmod 777 $cm
cm=$script_dir_path$pickup_path"tmpl_c"
chmod 777 $cm


