$wnd.com_haulmont_cuba_web_toolkit_ui_WidgetSet.runAsyncCallback5("function QWd(){}\nfunction SWd(){}\nfunction UWd(){}\nfunction Auc(a){this.a=a}\nfunction Cuc(a){this.a=a}\nfunction Tuc(a){this.a=a}\nfunction Wuc(a){this.a=a}\nfunction Duc(){hWb.call(this)}\nfunction suc(){sUb.call(this)}\nfunction Dh(a,b){a.d=b;return a}\nfunction Luc(a,b){$wnd[a]&&$wnd[a].setButtonDisabled(!b)}\nfunction Juc(a,b){$wnd[a]&&$wnd[a].setButtonTextStyle(b)}\nfunction Muc(a,b){$wnd[a]=$wnd.swfUploadHelper.create(b)}\nfunction Buc(a,b,c,d){bLd(NB(HTb(a.a,PN),929),b,c,d)}\nfunction Iuc(a,b){a.e=b;Luc(RXf+a.I,b);b?Juc(RXf+a.I,a.i):Juc(RXf+a.I,a.d)}\nfunction MRb(a,b,c){c==null?(delete a[b],undefined):(a[b]=(ekf(c),c),undefined)}\nfunction LRb(a,b){b==null?(delete a[JIf],undefined):(a[JIf]=(ekf(b),b),undefined)}\nfunction bLd(a,b,c,d){whd(a.a,new VXd(new lYd(PN),NRf),bB(VA(Prb,1),Ipf,1,5,[b,c,U5e(d)]))}\nfunction Suc(a){!!a.a.a&&whd(NB(NB(HTb(a.a.a.a,PN),929),678).a,new VXd(new lYd(PN),MRf),bB(VA(Prb,1),Ipf,1,5,[]));ACb(a.a,SXf)}\nfunction Guc(a){var b,c;a.v.style[xrf]=(Is(),jrf);a.v.style[trf]=(jq(),Mrf);c=a.v.childNodes;if(c){for(b=0;b<c.length;b++){Cj(a.v,c[b])}}}\nfunction Zuc(a){if(!$wnd.swfUploadHelper){var b=$wnd.setInterval(vpf(function(){if($wnd.swfUploadHelper){$wnd.clearInterval(b);Yuc(a)}}),100)}else{Yuc(a)}}\nfunction Yuc(b){var c,d;if(b){try{b.qc()}catch(a){a=Bvb(a);if(UB(a,55)){c=a;d=Sif(Uif(),'SwfUploadAPI');cjf(d,(kif(),jif),c.xc()==null?'':c.xc(),c)}else throw Cvb(a)}}}\nfunction uJc(){var b=$doc.title.split('#')[0];var c=false;$doc.attachEvent('onpropertychange',function(a){if(a.propertyName==wuf&&$doc.title!=b&&!c){c=true;$doc.title=b;c=false}})}\nfunction Fuc(a,b){a.s=a.b+exf+a.B;a.C=a.r+exf+a.B;a.I=b;ck(a.H,'upload_button_'+b);ck(a.v,'upload_progress_'+b);bk(a.F,a.G);if(Euc){Zuc(new Wuc(a))}else{Ah(Ch(Dh(Bh((wh(),new Eh(a.s)),new Tuc(a)),$wnd),false));Euc=true}}\nfunction Kuc(f,d){var e=f;d['swfupload_pre_load_handler']=vpf(function(){e.gn()});d['swfupload_load_failed_handler']=vpf(function(){e.fn()});d['upload_error_handler']=vpf(function(a,b,c){e.dn(a.name,c,b)});d['file_queue_error_handler']=vpf(function(a,b,c){e.dn(a.name,c,b)});d['queue_complete_handler']=vpf(function(a){e.en()})}\nfunction Nuc(){var a;SHb();XHb.call(this);this.t='';this.p='*.*';this.q='';this.o=10;this.A=100;this.w=50;this.e=true;this.c='Upload';this.n=U5e(90);this.f=U5e(25);this.k=U5e(1);this.j=U5e(0);this.i='';this.d='';this.B=JIf;this.b='';this.r='';this.H=(Xyb(),Wm($doc));this.F=Wm($doc);this.v=Wm($doc);this.dc.className='c-multiupload';tj(this.dc,nzb(this.H));this.v.className='c-multiupload-progress';Guc(this);a=this.dc.ownerDocument.getElementsByTagName('body')[0];this.F=Wm($doc);tj(this.F,nzb(this.v));tj(a,nzb(this.F))}\nfunction Huc(a){var b,c,d;ORb();(b5c(),!a5c&&(a5c=new u5c),b5c(),a5c).a.i&&uJc();c={};c['flash_url']=a.C;c['upload_url']=a.D+';jsessionid='+a.t;c['file_size_limit']=a.o+' MB';c['file_types']=a.p;c['file_types_description']=a.q;MRb(c,'file_upload_limit',a.A);MRb(c,'file_queue_limit',a.w);b={};b['progressTarget']=a.v.id;c['custom_settings']=b;LRb(c,(o4e(),o4e(),false));c['button_image_url']=a.g;c['button_width']=Y6e(a.n);c['button_height']=Y6e(a.f);c['button_disabled']=''+!a.e;c['button_placeholder_id']=a.H.id;c['button_text_left_padding']=Y6e(a.j);c['button_text_top_padding']=Y6e(a.k);c['button_text']='<span class=\"swfupload\">'+a.c+ZBf;a.e?(c[QXf]=a.i,undefined):(c[QXf]=a.d,undefined);c['minimum_flash_version']='9.0.28';d=$wnd.SWFUpload;c['button_cursor']=d.CURSOR.HAND;c['button_window_mode']=d.WINDOW_MODE.TRANSPARENT;c['file_dialog_complete_handler']=$wnd['cuba_multiupload_fileDialogComplete'];c['upload_start_handler']=$wnd['cuba_multiupload_uploadStart'];c['upload_progress_handler']=$wnd['cuba_multiupload_uploadProgress'];c['upload_complete_handler']=$wnd['cuba_multiupload_uploadComplete'];c['upload_success_handler']=$wnd['cuba_multiupload_uploadSuccess'];Kuc(a,c);Muc(RXf+a.I,c)}\nfunction MWd(c){var d={setter:function(a,b){a.a=b},getter:function(a){return a.a}};c.sr(QN,TXf,d);var d={setter:function(a,b){a.b=b},getter:function(a){return a.b}};c.sr(QN,UXf,d);var d={setter:function(a,b){a.c=r4e(b)},getter:function(a){return u4e(a.c)}};c.sr(QN,PXf,d);var d={setter:function(a,b){a.d=b.ku()},getter:function(a){return U5e(a.d)}};c.sr(QN,VXf,d);var d={setter:function(a,b){a.e=b},getter:function(a){return a.e}};c.sr(QN,WXf,d);var d={setter:function(a,b){a.f=b.ku()},getter:function(a){return U5e(a.f)}};c.sr(QN,XXf,d);var d={setter:function(a,b){a.g=b.ku()},getter:function(a){return U5e(a.g)}};c.sr(QN,YXf,d);var d={setter:function(a,b){a.i=b.ku()},getter:function(a){return U5e(a.i)}};c.sr(QN,ZXf,d);var d={setter:function(a,b){a.j=(ekf(b),b)},getter:function(a){return a.j}};c.sr(QN,zDf,d);var d={setter:function(a,b){a.k=b},getter:function(a){return a.k}};c.sr(QN,'fileTypes',d);var d={setter:function(a,b){a.n=b},getter:function(a){return a.n}};c.sr(QN,$Xf,d);var d={setter:function(a,b){a.o=b},getter:function(a){return a.o}};c.sr(QN,_Xf,d);var d={setter:function(a,b){a.p=b.ku()},getter:function(a){return U5e(a.p)}};c.sr(QN,aYf,d);var d={setter:function(a,b){a.q=(ekf(b),b)},getter:function(a){return a.q}};c.sr(QN,bYf,d)}\nvar PXf='buttonEnabled',QXf='button_text_style',RXf='upload_',SXf='c-multiupload-disabled',TXf='buttonCaption',UXf='buttonDisabledStyles',VXf='buttonHeight',WXf='buttonStyles',XXf='buttonTextLeft',YXf='buttonTextTop',ZXf='buttonWidth',$Xf='fileTypesDescription',_Xf='jsessionId',aYf='queueSizeLimit',bYf='queueUploadLimit';dwb(2332,32,rDf,suc);_.Wh=function uuc(){return !this.U&&(this.U=BTb(this)),NB(NB(this.U,6),452)};_.Jh=function vuc(){return !this.U&&(this.U=BTb(this)),NB(NB(this.U,6),452)};_.Yh=function wuc(){return !this.L&&(this.L=iUb(this)),NB(this.L,546)};_.Th=function tuc(){return false};_.Lh=function xuc(){(!this.L&&(this.L=iUb(this)),NB(this.L,546)).a=new Auc(this);(!this.L&&(this.L=iUb(this)),NB(this.L,546)).u=new Cuc(this)};_.Mh=function yuc(a){kUb(this,a);a.Iq(PXf)&&Iuc((!this.L&&(this.L=iUb(this)),NB(this.L,546)),(!this.U&&(this.U=BTb(this)),NB(NB(this.U,6),452)).c)};_.si=function zuc(a,b){var c,d,e,f,g,h;if(pyf in a[1]){return}if(!this.a){this.a=true;c=this.N.b.a;h=(!this.L&&(this.L=iUb(this)),NB(this.L,546));h.G=this.N.u.a;h.B=c;h.g=(f=NB((!this.U&&(this.U=BTb(this)),NB(NB(this.U,6),452)).bb.yu('buttonImage'),143),!f?null:f.Jq());h.b=(g=NB((!this.U&&(this.U=BTb(this)),NB(NB(this.U,6),452)).bb.yu('SWFUPLOAD_BOOTSTRAP_JS'),143),!g?null:g.Jq());h.r=(e=NB((!this.U&&(this.U=BTb(this)),NB(NB(this.U,6),452)).bb.yu('SWFUPLOAD_FLASH'),143),!e?null:e.Jq());h.D=j4c(b.v,a[1]['v'][Axf]);d=(!this.U&&(this.U=BTb(this)),NB(NB(this.U,6),452));h.c=d.a;h.f=U5e(d.d);h.n=U5e(d.i);h.i=d.e;h.d=d.b;h.j=U5e(d.f);h.k=U5e(d.g);h.w=d.p;h.o=d.j;h.A=d.q;h.p=d.k;h.q=d.n;h.t=d.o;h.e=d.c;Fuc(h,this.P)}};_.a=false;var ON=a5e(qEf,WTf,2332,K9);dwb(2808,1,{},Auc);var MN=a5e(qEf,'CubaMultiUploadConnector/1',2808,Prb);dwb(2809,1,{},Cuc);var NN=a5e(qEf,'CubaMultiUploadConnector/2',2809,Prb);dwb(452,101,{452:1,6:1,37:1,101:1,3:1},Duc);_.a='Upload';_.b='.swfupload {color: #c0c5cb;font-size: 12px; margin-left: 17px; font-family: Verdana,tahoma,arial,geneva,helvetica,sans-serif,\"Trebuchet MS\";}';_.c=true;_.d=25;_.e='.swfupload {color: #1e3146;font-size: 12px; margin-left: 17px; font-family: Verdana,tahoma,arial,geneva,helvetica,sans-serif,\"Trebuchet MS\";}';_.f=0;_.g=1;_.i=90;_.j=10;_.k='*.*';_.n='All files';_.o='';_.p=100;_.q=200;var QN=a5e(qEf,'CubaMultiUploadState',452,vnb);dwb(546,852,{14:1,12:1,13:1,74:1,73:1,11:1,22:1,29:1,15:1,25:1,41:1,10:1,9:1,546:1,21:1},Nuc);_.dn=function Ouc(a,b,c){!!this.u&&Buc(this.u,a,b,c)};_.en=function Puc(){Guc(this);!!this.u&&whd(NB(NB(HTb(this.u.a,PN),929),678).a,new VXd(new lYd(PN),LRf),bB(VA(Prb,1),Ipf,1,5,[]))};_.fn=function Quc(){!!this.a&&whd(NB(NB(HTb(this.a.a,PN),929),678).a,new VXd(new lYd(PN),KRf),bB(VA(Prb,1),Ipf,1,5,[]));(Xyb(),this.dc).className=SXf};_.gn=function Ruc(){};_.e=false;_.o=0;_.w=0;_.A=0;var Euc=false;var TN=a5e(qEf,'CubaMultiUploadWidget',546,kJ);dwb(2810,1,{},Tuc);_.uc=function Uuc(a){var b;Suc((b=this,NB(a,42),b))};_.vc=function Vuc(a){var b;Zuc(new Wuc((b=this,cC(a),b).a))};var RN=a5e(qEf,'CubaMultiUploadWidget/1',2810,Prb);dwb(1051,1,{},Wuc);_.qc=function Xuc(){Huc(this.a)};var SN=a5e(qEf,'CubaMultiUploadWidget/2',1051,Prb);dwb(2633,1,{});_.qc=function rIc(){whd(this.a.a.a,new VXd(new lYd(AP),nGf),bB(VA(Prb,1),Ipf,1,5,[]))};dwb(2663,1,{});_.qc=function V_c(){whd(this.a.c.a,new VXd(new lYd(fS),vIf),bB(VA(Prb,1),Ipf,1,5,[]))};dwb(2331,1,MIf);_.Cc=function PWd(){DYd(this.b,QN,vnb);tYd(this.b,mNf,ON);vYd(this.b,ON,wNf,new QWd);vYd(this.b,QN,wNf,new SWd);vYd(this.b,TN,wNf,new UWd);BYd(this.b,ON,Pwf,new lYd(QN));BYd(this.b,ON,Rwf,new lYd(TN));MWd(this.b);zYd(this.b,QN,TXf,new lYd(Wrb));zYd(this.b,QN,UXf,new lYd(Wrb));zYd(this.b,QN,PXf,new lYd(vrb));zYd(this.b,QN,VXf,new lYd(Irb));zYd(this.b,QN,WXf,new lYd(Wrb));zYd(this.b,QN,XXf,new lYd(Irb));zYd(this.b,QN,YXf,new lYd(Irb));zYd(this.b,QN,ZXf,new lYd(Irb));zYd(this.b,QN,zDf,new lYd(Arb));zYd(this.b,QN,'fileTypes',new lYd(Wrb));zYd(this.b,QN,$Xf,new lYd(Wrb));zYd(this.b,QN,_Xf,new lYd(Wrb));zYd(this.b,QN,aYf,new lYd(Irb));zYd(this.b,QN,bYf,new lYd(Arb));rYd(this.b,ON,new _Xd(K9,qQf,bB(VA(Wrb,1),Jpf,2,6,[lPf])));ytd((!rtd&&(rtd=new Dtd),rtd),this.a.d)};dwb(2333,1,rTf,QWd);_.mr=function RWd(a,b){return new suc};var M8=a5e(zKf,'ConnectorBundleLoaderImpl/5/1/1',2333,Prb);dwb(2334,1,rTf,SWd);_.mr=function TWd(a,b){return new Duc};var N8=a5e(zKf,'ConnectorBundleLoaderImpl/5/1/2',2334,Prb);dwb(2335,1,rTf,UWd);_.mr=function VWd(a,b){return new Nuc};var O8=a5e(zKf,'ConnectorBundleLoaderImpl/5/1/3',2335,Prb);vpf(Sh)(5);\n//# sourceURL=com.haulmont.cuba.web.toolkit.ui.WidgetSet-5.js\n")