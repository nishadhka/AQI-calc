import pandas as pd

db=pd.read_csv('/home/sunbird/Documents/UEmissInfo/lab/webAQI/AQI-calc/AQI_compare.csv')

db1=db[db.variables=='PM10']
contrs1=db1.drop_duplicates('country')
contrs2=contrs1.country.tolist()
contrs2

variable='PM10'
db2=db1[db1.country=='IND']
db3=db2.reset_index()


for contr in contrs2:
    variable='PM10'
    db2=db1[db1.country==contr]
    db3=db2.reset_index()
    c1=db3.Conclow[0]
    c2=db3.Conchigh[0]
    a1=db3.AQIlow[0]
    a2=db3.AQIhigh[0]
    d2=db3.advisory[0]
    #jsp2a=[]
    jsp2a=[]
    for index, row in db3[1:].iterrows():
        jsp2='else if (c>='+str(row['Conclow'])+' && c<'+str(row['Conchigh'])+') \n { \n AQI=Linear('+str(row['AQIhigh'])+','+ \
        str(row['AQIlow'])+','+str(row['Conchigh'])+','+str(row['Conclow'])+',c); \n } \n'
        jsp2a.append(jsp2)
    jsp2b=" ".join(jsp2a)
    jsp1='function AQI'+variable+contr+'(Concentration) \n { \n var Conc=parseFloat(Concentration); \n var c; \n var AQI; \n c=Math.floor(Conc); \
          \n if (c>='+str(c2)+' && c<'+str(c1)+') \n { \n AQI=Linear('+ str(a2)+','+str(a1)+','+str(c2)+',' \
          +str(c1)+',c); \n } \n'+jsp2b+' else \n { \n AQI="Out of Range"; \n } \n return AQI; \n }'
    gsp2a=[]
    for index, row in db3[1:].iterrows():
        jsp2='else if (AQI>'+str(row['AQIlow'])+' && AQI<='+str(row['AQIhigh'])+') \n { \n AQICategory'+contr+'="'+str(row['advisory']+'"; \n } \n')
        jsp2a.append(jsp2)
    gsp2b=" ".join(gsp2a)
    gsp1='function AQICategory'+contr+'(AQIndex) \n { \n var AQI=parseFloat(AQIndex); \n var AQICategory'+contr+'; \
          \n if (AQI<='+str(c2)+') \n { \n AQICategory'+contr+'="'+d2+'; \n } \n'+gsp2b+' else \n { \n AQICategory'+contr+'="Out of Range"; \n } \n return AQICategory'+contr+'; \n }'
    print jsp1
    print gsp1

