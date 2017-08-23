import pandas as pd

db=pd.read_csv('/home/sunbird/Documents/UEmissInfo/lab/webAQI/AQI-calc/AQI_compare.csv')


variable='NO2'

db1=db[db.variables==variable]
contrs1=db1.drop_duplicates('country')
contrs2=contrs1.country.tolist()
contrs2



for contr in contrs2:
    db2=db1[db1.country==contr]
    db3=db2.reset_index()
    c1=db3.Conclow[0]
    c2=db3.Conchigh[0]
    a1=db3.AQIlow[0]
    a2=db3.AQIhigh[0]
    d2=db3.advisory[0]
    sno=db3.sno[0]
    alpha=db3.alpha[0]
    cl2=db3.colorcode[0]
    #jsp2a=[]
    jsp2a=[]
    for index, row in db3[1:].iterrows():
        jsp2='else if (c>='+str(row['Conclow'])+' && c<'+str(row['Conchigh'])+') \n { \n AQI=Linear('+str(row['AQIhigh'])+','+ \
        str(row['AQIlow'])+','+str(row['Conchigh'])+','+str(row['Conclow'])+',c); \n } \n'
        jsp2a.append(jsp2)
    jsp2b=" ".join(jsp2a)
    jsp1='function AQI'+variable+contr+'(Concentration) \n { \n var Conc=parseFloat(Concentration); \n var c; \n var AQI; \n c=Math.floor(Conc); \
          \n if (c>='+str(c1)+' && c<'+str(c2)+') \n { \n AQI=Linear('+ str(a2)+','+str(a1)+','+str(c2)+',' \
          +str(c1)+',c); \n } \n'+jsp2b+' else \n { \n AQI="Out of Range"; \n } \n return AQI; \n }'
    gsp2a=[]
    for index, row in db3[1:].iterrows():
        gsp2='else if (AQI>'+str(row['AQIlow'])+' && AQI<='+str(row['AQIhigh'])+') \n { \n AQICategory'+contr+variable+'="'+str(row['advisory']+'"; \n } \n')
        gsp2a.append(gsp2)
    gsp2b=" ".join(gsp2a)
    gsp1='function AQICategory'+contr+variable+'(AQIndex) \n { \n var AQI=parseFloat(AQIndex); \n var AQICategory'+contr+variable+';\n if (AQI<='+str(c2)+') \n { \n AQICategory'+contr+variable+'="'+d2+'"; \n } \n'+gsp2b+' else \n { \n AQICategory'+contr+variable+'="Out of Range"; \n } \n return AQICategory'+contr+variable+'; \n }'
    csp2a=[]
    for index, row in db3[1:].iterrows():
        csp2='else if (AQI>'+str(row['AQIlow'])+' && AQI<='+str(row['AQIhigh'])+') \n { \n AQIcolor'+contr+variable+'="'+str(row['colorcode']+'"; \n } \n')
        csp2a.append(csp2)
    csp2b=" ".join(csp2a)
    csp1='function AQIcolor'+contr+variable+'(AQIndex) \n { \n var AQI=parseFloat(AQIndex); \n var AQIcolor'+contr+variable+';\n if (AQI<='+str(c2)+') \n { \n AQIcolor'+contr+variable+'="'+cl2+'"; \n } \n'+csp2b+' else \n { \n AQIcolor'+contr+variable+'="Out of Range"; \n } \n return AQIcolor'+contr+variable+'; \n }'
    #print 'AQI'+variable+contr
    #print 'AQICategory'+contr
    print jsp1
    print gsp1
    print csp1


import pandas as pd

db=pd.read_csv('/home/sunbird/Documents/UEmissInfo/lab/webAQI/AQI-calc/AQI_compare.csv')


db1=db[db.variables=='NO2']

db2=db1.drop_duplicates('country')
db3=db2.sort_values('tableno')

ffc=[]
for index, row in db3.iterrows():
        ffc2='var th1 = table.tHead.appendChild(document.createElement("th")); \n th1.innerHTML = "'+ row['contr']+'"'
        print ffc2
        ffc.append(ffc2)
