import pymysql
#connection = pymysql.connect(host='copperstick6.mysql.pythonanywhere-services.com',
#                             user='copperstick6',
#                             password='ninjapie101',
#                             db= "fb",
#                             charset='utf8mb4',
#                             cursorclass=pymysql.cursors.DictCursor)
#with connection.cursor() as cursor:
#    sql = "SELECT * FROM token"
#    cursor.execute(sql)
#    result = cursor.fetchall()
#    for record in result:
#        print(record)

#connection.close()


import sshtunnel

sshtunnel.SSH_TIMEOUT = 5.0
sshtunnel.TUNNEL_TIMEOUT = 5.0

with sshtunnel.SSHTunnelForwarder(
    ('ssh.pythonanywhere.com'),
    ssh_username='copperstick6', ssh_password='ninjapie101',
    remote_bind_address=('copperstick6.mysql.pythonanywhere-services.com', 3306)
) as tunnel:
    connection = pymysql.connect(
        user='copperstick6', password='ninjapie101',
        host='127.0.0.1', port=tunnel.local_bind_port,
        database='copperstick6$fb',cursorclass=pymysql.cursors.DictCursor
    )
    with connection.cursor() as cursor:
        sql = "SELECT * FROM token"
        cursor.execute(sql)
        result = cursor.fetchall()
        for record in result:
            print(record["token"])

    connection.close()
