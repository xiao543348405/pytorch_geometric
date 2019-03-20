Search.setIndex({docnames:["index","modules/data","modules/datasets","modules/nn","modules/transforms","modules/utils","notes/create_dataset","notes/create_gnn","notes/installation","notes/introduction"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.intersphinx":1,"sphinx.ext.viewcode":1,sphinx:55},filenames:["index.rst","modules/data.rst","modules/datasets.rst","modules/nn.rst","modules/transforms.rst","modules/utils.rst","notes/create_dataset.rst","notes/create_gnn.rst","notes/installation.rst","notes/introduction.rst"],objects:{"torch_geometric.data":{Batch:[1,1,1,""],Data:[1,1,1,""],DataListLoader:[1,1,1,""],DataLoader:[1,1,1,""],Dataset:[1,1,1,""],DenseDataLoader:[1,1,1,""],InMemoryDataset:[1,1,1,""],download_url:[1,5,1,""],extract_bz2:[1,5,1,""],extract_gz:[1,5,1,""],extract_tar:[1,5,1,""],extract_zip:[1,5,1,""]},"torch_geometric.data.Batch":{cumsum:[1,2,1,""],from_data_list:[1,3,1,""],num_graphs:[1,4,1,""]},"torch_geometric.data.Data":{__call__:[1,2,1,""],__contains__:[1,2,1,""],__getitem__:[1,2,1,""],__iter__:[1,2,1,""],__len__:[1,2,1,""],__setitem__:[1,2,1,""],apply:[1,2,1,""],cat_dim:[1,2,1,""],clone:[1,2,1,""],contains_isolated_nodes:[1,2,1,""],contains_self_loops:[1,2,1,""],contiguous:[1,2,1,""],from_dict:[1,3,1,""],is_coalesced:[1,2,1,""],is_directed:[1,2,1,""],is_undirected:[1,2,1,""],keys:[1,4,1,""],num_edges:[1,4,1,""],num_features:[1,4,1,""],num_nodes:[1,4,1,""],to:[1,2,1,""]},"torch_geometric.data.Dataset":{__getitem__:[1,2,1,""],__len__:[1,2,1,""],download:[1,2,1,""],get:[1,2,1,""],num_features:[1,4,1,""],process:[1,2,1,""],processed_file_names:[1,4,1,""],processed_paths:[1,4,1,""],raw_file_names:[1,4,1,""],raw_paths:[1,4,1,""]},"torch_geometric.data.InMemoryDataset":{__getitem__:[1,2,1,""],__len__:[1,2,1,""],collate:[1,2,1,""],download:[1,2,1,""],get:[1,2,1,""],num_classes:[1,4,1,""],process:[1,2,1,""],processed_file_names:[1,4,1,""],raw_file_names:[1,4,1,""],shuffle:[1,2,1,""]},"torch_geometric.datasets":{Amazon:[2,1,1,""],BitcoinOTC:[2,1,1,""],CoMA:[2,1,1,""],Coauthor:[2,1,1,""],CoraFull:[2,1,1,""],Entities:[2,1,1,""],FAUST:[2,1,1,""],GeometricShapes:[2,1,1,""],KarateClub:[2,1,1,""],MNISTSuperpixels:[2,1,1,""],ModelNet:[2,1,1,""],PCPNetDataset:[2,1,1,""],PPI:[2,1,1,""],Planetoid:[2,1,1,""],QM7b:[2,1,1,""],QM9:[2,1,1,""],ShapeNet:[2,1,1,""],TUDataset:[2,1,1,""]},"torch_geometric.nn":{conv:[3,0,0,"-"],data_parallel:[3,0,0,"-"],glob:[3,0,0,"-"],meta:[3,0,0,"-"],models:[3,0,0,"-"],pool:[3,0,0,"-"]},"torch_geometric.nn.conv":{AGNNConv:[3,1,1,""],APPNP:[3,1,1,""],ARMAConv:[3,1,1,""],ChebConv:[3,1,1,""],EdgeConv:[3,1,1,""],GATConv:[3,1,1,""],GCNConv:[3,1,1,""],GINConv:[3,1,1,""],GMMConv:[3,1,1,""],GatedGraphConv:[3,1,1,""],GraphConv:[3,1,1,""],NNConv:[3,1,1,""],PointConv:[3,1,1,""],RGCNConv:[3,1,1,""],SAGEConv:[3,1,1,""],SGConv:[3,1,1,""],SplineConv:[3,1,1,""],XConv:[3,1,1,""],message_passing:[3,0,0,"-"]},"torch_geometric.nn.conv.AGNNConv":{forward:[3,2,1,""],propagation_matrix:[3,2,1,""],reset_parameters:[3,2,1,""]},"torch_geometric.nn.conv.APPNP":{forward:[3,2,1,""]},"torch_geometric.nn.conv.ARMAConv":{forward:[3,2,1,""],reset_parameters:[3,2,1,""]},"torch_geometric.nn.conv.ChebConv":{forward:[3,2,1,""],reset_parameters:[3,2,1,""]},"torch_geometric.nn.conv.EdgeConv":{forward:[3,2,1,""],reset_parameters:[3,2,1,""]},"torch_geometric.nn.conv.GATConv":{forward:[3,2,1,""],reset_parameters:[3,2,1,""]},"torch_geometric.nn.conv.GCNConv":{forward:[3,2,1,""],norm:[3,3,1,""],reset_parameters:[3,2,1,""]},"torch_geometric.nn.conv.GINConv":{forward:[3,2,1,""],reset_parameters:[3,2,1,""]},"torch_geometric.nn.conv.GMMConv":{forward:[3,2,1,""],reset_parameters:[3,2,1,""]},"torch_geometric.nn.conv.GatedGraphConv":{forward:[3,2,1,""],reset_parameters:[3,2,1,""]},"torch_geometric.nn.conv.GraphConv":{forward:[3,2,1,""],reset_parameters:[3,2,1,""]},"torch_geometric.nn.conv.NNConv":{forward:[3,2,1,""],reset_parameters:[3,2,1,""]},"torch_geometric.nn.conv.PointConv":{forward:[3,2,1,""],reset_parameters:[3,2,1,""]},"torch_geometric.nn.conv.RGCNConv":{forward:[3,2,1,""],reset_parameters:[3,2,1,""]},"torch_geometric.nn.conv.SAGEConv":{forward:[3,2,1,""],reset_parameters:[3,2,1,""]},"torch_geometric.nn.conv.SGConv":{forward:[3,2,1,""],reset_parameters:[3,2,1,""]},"torch_geometric.nn.conv.SplineConv":{forward:[3,2,1,""],reset_parameters:[3,2,1,""]},"torch_geometric.nn.conv.XConv":{forward:[3,2,1,""],reset_parameters:[3,2,1,""]},"torch_geometric.nn.conv.message_passing":{MessagePassing:[3,1,1,""]},"torch_geometric.nn.conv.message_passing.MessagePassing":{message:[3,2,1,""],propagate:[3,2,1,""],update:[3,2,1,""]},"torch_geometric.nn.data_parallel":{DataParallel:[3,1,1,""]},"torch_geometric.nn.data_parallel.DataParallel":{forward:[3,2,1,""],scatter:[3,2,1,""]},"torch_geometric.nn.dense":{dense_sage_conv:[3,0,0,"-"],diff_pool:[3,0,0,"-"]},"torch_geometric.nn.dense.dense_sage_conv":{DenseSAGEConv:[3,1,1,""]},"torch_geometric.nn.dense.dense_sage_conv.DenseSAGEConv":{forward:[3,2,1,""],reset_parameters:[3,2,1,""]},"torch_geometric.nn.dense.diff_pool":{dense_diff_pool:[3,5,1,""]},"torch_geometric.nn.glob":{GlobalAttention:[3,1,1,""],Set2Set:[3,1,1,""],global_add_pool:[3,5,1,""],global_max_pool:[3,5,1,""],global_mean_pool:[3,5,1,""],global_sort_pool:[3,5,1,""]},"torch_geometric.nn.glob.GlobalAttention":{forward:[3,2,1,""],reset_parameters:[3,2,1,""]},"torch_geometric.nn.glob.Set2Set":{forward:[3,2,1,""],reset_parameters:[3,2,1,""]},"torch_geometric.nn.meta":{MetaLayer:[3,1,1,""]},"torch_geometric.nn.meta.MetaLayer":{forward:[3,2,1,""],reset_parameters:[3,2,1,""]},"torch_geometric.nn.models":{GAE:[3,1,1,""]},"torch_geometric.nn.models.GAE":{decode_all:[3,2,1,""],decode_for_indices:[3,2,1,""],encode:[3,2,1,""],evaluate:[3,2,1,""],loss:[3,2,1,""],split_edges:[3,2,1,""]},"torch_geometric.nn.pool":{TopKPooling:[3,1,1,""],avg_pool:[3,5,1,""],avg_pool_x:[3,5,1,""],fps:[3,5,1,""],graclus:[3,5,1,""],knn:[3,5,1,""],knn_graph:[3,5,1,""],max_pool:[3,5,1,""],max_pool_x:[3,5,1,""],nearest:[3,5,1,""],radius:[3,5,1,""],radius_graph:[3,5,1,""],voxel_grid:[3,5,1,""]},"torch_geometric.nn.pool.TopKPooling":{forward:[3,2,1,""],reset_parameters:[3,2,1,""]},"torch_geometric.transforms":{AddSelfLoops:[4,1,1,""],Cartesian:[4,1,1,""],Center:[4,1,1,""],Compose:[4,1,1,""],Constant:[4,1,1,""],Distance:[4,1,1,""],FaceToEdge:[4,1,1,""],KNNGraph:[4,1,1,""],LinearTransformation:[4,1,1,""],LocalCartesian:[4,1,1,""],LocalDegreeProfile:[4,1,1,""],NormalizeFeatures:[4,1,1,""],NormalizeScale:[4,1,1,""],OneHotDegree:[4,1,1,""],Polar:[4,1,1,""],RadiusGraph:[4,1,1,""],RandomFlip:[4,1,1,""],RandomRotate:[4,1,1,""],RandomScale:[4,1,1,""],RandomShear:[4,1,1,""],RandomTranslate:[4,1,1,""],SamplePoints:[4,1,1,""],Spherical:[4,1,1,""],TargetIndegree:[4,1,1,""],ToDense:[4,1,1,""],TwoHop:[4,1,1,""]},"torch_geometric.utils":{accuracy:[5,5,1,""],add_self_loops:[5,5,1,""],contains_isolated_nodes:[5,5,1,""],contains_self_loops:[5,5,1,""],degree:[5,5,1,""],dense_to_sparse:[5,5,1,""],f1_score:[5,5,1,""],false_negative:[5,5,1,""],false_positive:[5,5,1,""],grid:[5,5,1,""],is_undirected:[5,5,1,""],normalized_cut:[5,5,1,""],one_hot:[5,5,1,""],precision:[5,5,1,""],recall:[5,5,1,""],remove_self_loops:[5,5,1,""],scatter_:[5,5,1,""],softmax:[5,5,1,""],sparse_to_dense:[5,5,1,""],to_dense_batch:[5,5,1,""],to_networkx:[5,5,1,""],to_scipy_sparse_matrix:[5,5,1,""],to_undirected:[5,5,1,""],true_negative:[5,5,1,""],true_positive:[5,5,1,""]},torch_geometric:{data:[1,0,0,"-"],datasets:[2,0,0,"-"],transforms:[4,0,0,"-"],utils:[5,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","staticmethod","Python static method"],"4":["py","attribute","Python attribute"],"5":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:staticmethod","4":"py:attribute","5":"py:function"},terms:{"100k":2,"25a":8,"25b":8,"abstract":6,"boolean":[1,2],"byte":9,"case":[1,6,8],"class":[1,2,3,4,5,6,9],"default":[1,2,3,4,5,6,9],"final":[1,2,3,6,7,9],"float":[3,4,5,9],"function":[1,2,3,6,7,8,9],"import":[3,6,7,8,9],"int":[1,2,3,4,5],"long":[3,7,9],"new":[1,7,9],"return":[1,2,3,5,6,7,8,9],"short":9,"static":[1,3],"super":[3,6,7,9],"true":[1,2,3,4,5,8,9],"try":9,BGS:2,For:[2,6,9],NOT:9,One:3,That:[7,9],The:[1,2,3,4,5,6,8,9],There:9,These:8,Use:6,Using:2,With:[1,7],__and_:8,__call__:1,__contains__:1,__cudapopcallconfigur:8,__getitem__:[1,6],__init__:[3,6,7,9],__iter__:1,__len__:[1,6],__setitem__:1,__version__:8,_cuda:8,_element:8,_uelement:8,_zn2at6detail20dynamiccudainterface10set_device:8,_zn3c105errorc1ens_14sourcelocationerkss:8,abi:8,about:[2,8,9],acc:9,acceler:7,access:[1,2,6,8,9],accompani:[1,3],accord:[2,3,4,5,6],account:9,accuraci:[5,9],achiev:9,across:[3,8],act:3,activ:[2,9],activi:3,actual:[7,8],adam:9,adapt:3,add:[3,4,5,7,8],add_loop:3,add_self_loop:[5,7],added:1,adding:3,addit:[0,1,2,3,5,6,7,9],addition:8,additionali:[],addselfloop:4,adj:3,adjac:[1,3,4,5,7,9],advanc:[3,8],affect:[],after:9,against:[3,9],aggr:[3,7],aggr_out:[3,7],aggreg:[3,5,7],agnnconv:3,aifb:2,airplan:[2,9],algoithm:3,algorithm:3,all:[1,2,3,4,5,6,7,8,9],allow:[3,7,9],along:[4,5],alpha:3,alpha_:3,alreadi:[6,9],also:[0,1,8],although:[6,9],alwai:7,amazon:2,anaconda:8,analog:[3,6,7],angl:[3,4],ani:[1,3,7,8,9],annot:[2,8],anoth:9,anyth:1,anytim:9,append:[3,4,7],appl:8,appli:[1,3,4,5,6,9],applic:3,appnp:3,approach:3,approxim:3,arbitrari:[0,1,7,9],architectur:[3,7],archiv:1,area:[2,3,4],arg:3,argument:[3,7,9],arma:3,armaconv:3,around:4,assign:[1,3,5,7,9],assign_index:3,assum:7,atom:2,attent:3,attribut:[1,4,5,9],auc:3,augment:[6,9],author:2,auto:3,autoencod:2,automat:[3,4,5,6,7,9],auxiliari:3,avail:6,averag:[3,9],avg_pool:3,avg_pool_x:3,avoid:[],axi:4,backward:[3,9],bag:2,base:[0,1,3,4,8],baselin:4,basi:3,batch:[0,1,3,5,7],batch_i:3,batch_siz:[1,9],batch_x:3,batchnorm:[],becaus:[6,8],befor:[1,2,6,7,8,9],beforehand:3,begin:[4,9],behavior:[],behaviour:[],being:[1,2,3,4,6,9],below:[7,8],benchmark:[0,2],besid:9,best:6,beta:3,between:[8,9],bia:3,bias:3,big:1,bin:8,binari:[2,3],bipartit:7,bitcoin:2,bitcoinotc:2,block:[7,9],blog:9,bmatrix:[4,9],bodi:6,bool:[1,2,3,4,5],both:[0,7,9],bought:2,brief:6,brows:9,buffer:3,build:[3,7,8],bytetensor:[1,3],cach:[3,8],cad:2,calcul:3,call:[3,7,8,9],callabl:[1,2,3],can:[1,3,6,7,8,9],cannot:8,cap:2,captur:2,car:2,care:[7,9],cartesian:4,cat:[3,4,7],cat_dim:1,categori:[2,9],caught:[],ccompil:8,cdot:[3,5,7,9],center:4,certain:[],chain:9,chair:2,chang:8,channel:3,chebconv:3,chebyshev:3,check:8,chemistri:[2,3],citat:[2,9],cites:[2,9],clang:8,clang_osx:8,clangxx_osx:8,classfic:3,classic:3,classif:[3,4,9],classifi:3,clean:[7,8,9],clear:8,clone:[1,8],close:3,cloud:[0,2,3,7,9],club:2,cluster:[3,8],cmd:8,cnn:[2,3],coarsen:3,coauthor:2,code:6,coeffici:3,col:[3,7],collat:[1,6],collect:[2,8],colon:3,column:9,com:8,coma:2,come:[7,8,9],command:8,common:[0,8],compil:8,complain:8,complet:[1,2,9],compos:[4,9],composit:9,compress:1,comput:[2,3,4,5,7],concat:[3,4],concaten:[1,3,6,9],concept:[6,9],conda:8,condit:3,conflict:2,conform:2,connect:[1,2,3,9],consist:[0,2,8,9],consol:1,constant:4,construct:[1,3,7],constructor:[6,9],contain:[1,2,3,5,6,7,9],contains_isolated_nod:[1,5,9],contains_self_loop:[1,5,9],content:1,contigu:[1,9],continu:[2,3,6],contrast:4,contribut:5,conv1:9,conv2:9,conv:[3,7,8],convers:1,convert:[2,4,5,9],convolut:[2,9],convolv:3,coo:[1,9],coordin:[3,4],copi:3,cora:[2,9],coraful:2,core:[8,9],correct:[5,9],correctli:8,correspond:4,corrupt:1,cos:3,covari:3,cpath:8,cpu:[8,9],crash:8,creat:[0,1,3,4,5,8,9],creation:2,cross:3,cube:2,cuda:[3,9],cumsum:1,cumul:1,cup:[3,7],current:3,curv:3,curvatur:2,cut:[3,5],cxx:8,d_glibcxx_use_cxx11_abi:8,data:[0,2,3,4,5,6,7],data_1:6,data_2:6,data_:6,data_list:[1,3,6],datalistload:[1,3],dataload:[1,6,9],dataparallel:1,dataset:[0,1],ddot:9,decod:3,decode_al:3,decode_for_indic:3,decomposit:3,deep:[0,2,3,7],def:[3,6,7,8,9],defin:[3,4,5,7,9],deg:[4,5,7],deg_inv_sqrt:7,degre:[3,4,5,7],denot:[3,7,9],dens:[1,2,4,5],dense_diff_pool:3,dense_to_spars:5,densedataload:1,densesageconv:3,descend:3,describ:[3,7,9],desir:5,detail:3,determin:3,devic:[1,3,5,9],device_id:3,diagon:[3,9],dicconnect:1,dictionari:[1,6],did:[],differ:[2,9],differenti:[3,7],dilat:3,dim:[3,7,9],dim_siz:[3,5],dimens:[1,3,4,5,7,9],dimension:[3,4,5],dir:8,direct:[1,3,7,9],directori:[1,2,8,9],disk:[1,2,6,9],distanc:[3,4],distant:3,distribut:9,distutil:8,divid:7,docker:8,document:[2,9],doe:[1,3,5,8],doing:9,domain:7,done:[6,7],dortmund:[2,9],downgrad:8,download:[1,6,8,9],download_url:1,drop:3,dropout:[3,9],dry_run:8,dtype:[1,3,5,7,9],dump:8,duplic:1,dure:3,dyld_library_path:8,dynam:[2,3,6,7],dynamicedgeconv:7,each:[1,2,3,4,5,6,7,9],earli:9,earphon:2,easi:0,easiest:9,easili:7,echo:8,edg:[1,2,3,4,5,9],edge_attr:[1,3,5,9],edge_index:[1,3,5,7,9],edge_indic:[3,5],edge_mlp:3,edge_model:3,edge_norm:3,edge_typ:3,edge_weight:3,edge_window_s:2,edgeconv:[3,7],effect:4,eigenvector:3,either:[5,7],element:[3,5],ell_2:3,els:[3,9],embed:[2,3,7],encod:[3,4],end:[3,4,9],energi:2,ensur:[1,8],entiti:2,entri:[1,3,5,7],entropi:3,environ:8,enzym:9,epoch:[1,9],eps:3,epsilon:3,equal:3,equival:9,error:8,etc:[],euclidean:4,eval:9,evalu:[2,3,9],even:[7,8,9],everi:[1,2,5],everyth:[],evolv:2,evolvegcn:2,exactli:9,exampl:[0,1,3,5,6,8],exchang:7,execut:[3,8],exist:[2,4],exit:8,exp:3,expect:9,experi:9,explan:9,expos:3,express:[2,7],extend:[3,9],extens:0,extent:1,extract:[1,6],extract_bz2:1,extract_gz:1,extract_tar:1,extract_zip:1,extrem:2,f1_score:5,f_1:5,f_e:3,f_u:3,f_x:3,face:[2,4,9],facetoedg:[2,4],fact:[7,9],factor:[3,4],fail:8,fals:[1,2,3,4,5,7,9],false_neg:5,false_posit:5,faq:8,fashion:9,fast:3,faster:9,fault:8,faust:[2,9],featur:[1,2,3,4,5,7,9],field:2,fifth:3,file:[1,6,8,9],filepath:1,fill_valu:5,filter:[3,6],find:[1,3,6,9],fine:[],first:[3,5,7,8,9],fission:2,fit:[1,6],fix:[2,3],fixabl:8,flag:3,flip:4,flow:[2,3,7],fly:1,folder:[1,6,8],follow:[6,7,8,9],forc:8,form:3,format:[1,5,6,8,9],formula:7,forward:[3,7,9],found:[3,4,6,8,9],four:[6,9],fps:3,frac:[3,4,5,7],framework:2,frequent:2,from:[0,1,2,3,4,5,6,7,8,9],from_data_list:1,from_dict:1,full:[2,7],func:[1,3],fundament:[6,9],further:[6,7],gae:3,gamma:7,gamma_:3,gatconv:3,gate:3,gate_nn:3,gatedgraphconv:3,gaussian:[2,3],gcc:8,gcn:9,gcnconv:[3,7,9],gene:2,gener:[2,3,7,9],geometr:[2,3,6,7,8,9],geometricshap:2,get:[1,3,4,6],gfortran_osx:8,ginconv:3,git:8,github:8,give:6,given:[1,2,3,4,5],global:4,global_add_pool:3,global_max_pool:3,global_mean_pool:3,global_mlp:3,global_model:3,global_nn:3,global_sort_pool:3,globalattent:3,gmmconv:3,gnn:7,good:2,gpu:[1,3,7,8,9],graclu:3,gradient:3,graph:[0,1,2,3,4,5,6,7],graphconv:3,graphkernel:9,graphsag:3,greedi:3,grid:[3,5],group:2,gru:3,guid:8,guitar:2,hack:9,hand:9,handl:3,happen:6,happi:9,has:[3,6,7,9],hat:3,have:[1,3,6,7,8,9],head:3,heavi:6,height:5,help:[0,6,7,8],here:[1,3,6,7,8,9],hidden_channel:3,high:9,higher:3,highnois:2,hold:[1,2,3,5,9],hop:[3,4],host:8,hot:[4,5],how:[1,3,6],howev:6,http:[8,9],huge:6,human:2,identifi:[1,3,9],idx:[1,6],imag:[8,9],imdb:2,immunolog:2,implement:[3,6,8,9],importerror:8,improv:3,in_channel:[3,7],includ:[1,2,3,8],include_norm:4,index:[0,1,3,5,9],indic:[1,2,3,4,5,7,9],individu:[3,6,9],induct:[2,3],infer:4,inferr:3,inform:[2,9],inherit:[6,7,9],initi:[2,3,7,9],inmemorydataset:[1,6],inner:3,input:[3,9],insert:3,insid:7,inspir:3,instal:0,instanc:[7,9],instead:[2,3,4],intend:3,interact:2,interfac:[0,7],intern:[1,7],interpret:3,interv:[3,4],introduc:[8,9],introduct:[0,6],invalid:5,invari:[3,7],involv:6,irregular:[0,7],is_avail:[8,9],is_coalesc:1,is_construct:8,is_direct:[1,9],is_open_splin:3,is_undirect:[1,5,9],isol:[1,5],isomorph:3,issu:8,item:[1,9],iter:[1,3],its:[1,2,3,4,5,7,8,9],join:6,karat:2,karateclub:2,kei:[1,9],kernel:[2,3,8],kernel_s:3,keyword:2,kind:[3,7],kipf:7,knife:2,knn:3,knn_graph:[3,7],knngraph:4,known:[0,3],kwarg:[1,3,7],label:[2,5,9],lai:3,lamp:2,laplacian:3,laptop:2,larg:[0,3,9],larger:3,last:3,latent:3,layer:[2,9],layout:1,lceil:3,lcudart:8,ld_library_path:8,ldot:[3,5],ldp:4,lead:9,leakyrelu:3,learn:[0,2,3],learnabl:3,least:8,leav:7,left:[3,5,7],leman:3,len:[6,9],length:3,leq:4,less:3,let:[6,7,9],level:[2,3,9],lib64:8,lib:8,librari:[0,8],lift:[3,7],like:[2,9],limit:7,lin:[3,7],line:8,linear:[3,7,9],linearli:7,lineartransform:4,link:[2,3,4,8],linker:8,linux:8,list:[1,3,4,5,6,9],load:[1,2,6,9],loader:[0,1,9],local:[2,3,4,8],local_nn:3,localcartesian:4,localdegreeprofil:4,locat:[3,5],log:[1,8],log_softmax:9,logic:[6,7],logist:3,longtensor:[1,3,5],look:[6,8,9],loop:[1,3,4,5,7],loss:[3,9],lot:[6,8],low:2,lownois:2,lstm:3,luckili:7,mac:8,machin:[2,8],macosx_deployment_target:8,magic:6,mai:[1,6,8,9],main:9,make:[1,8],mani:6,manifold:[2,3],manual:6,map:[1,2],mask:[2,3],match:[3,8],mathbb:[3,5,7],mathbf:[3,4,5,7,9],mathcal:[3,4,5,7],mathemat:7,mathrm:[3,4,5,9],matric:[1,3,7,9],matrix:[1,3,4,5,7,9],matter:3,max:[3,4,5,7,9],max_:[3,4,7],max_degre:4,max_i:5,max_num_neighbor:3,max_pool:3,max_pool_x:3,max_val:[3,5],max_valu:4,maxim:3,maximum:[3,4],mean:[3,4,5,7,8],mednois:2,meet:3,memori:1,merg:1,mesh:[0,2,4,9],messag:[0,2,3],messagepass:3,meta:3,metalay:3,method:[0,1,3,6,7],metric:3,mid:4,min:4,mini:[0,1],miniconda:8,minim:5,minimum:3,miss:8,mixtur:[2,3],mlp:[3,7],mnist:2,mnistsuperpixel:2,mode:1,model:[1,2,9],modelnet10:[2,9],modelnet40:2,modelnet:2,modifi:3,modul:[0,3,8,9],molecul:2,molecular:2,moleculenet:2,more:[3,9],most:3,motif:2,motorbik:2,mug:2,multi:[1,2,3,5],multicellular:2,multilevel:3,multipl:5,must:[3,6,8],mutag:2,myowndataset:6,n_1:[3,5],n_b:[3,5],n_i:[3,5],name:[1,2,3,5,7,8,9],nearest:[3,7,9],need:[1,3,6,7,8,9],neg:[3,5],neg_adj_mask:3,neg_edge_index:3,negative_slop:3,neighbor:[3,4,7,9],neighborhood:[3,4,7],net:[3,9],network:[0,2,3,9],networkx:5,neural:[2,3,7,9],newli:8,next:9,nll_loss:9,nnconv:3,nngraph:9,node:[1,2,3,4,5,7,9],node_mlp:3,node_model:3,noisi:2,noisyandvardens:2,non:[4,9],none:[1,2,3,4,5,6,7,9],nonois:2,norm:[3,4,7],normal:[2,3,4,5,7],normalized_cut:5,normalizefeatur:4,normalizescal:4,notat:9,note:[0,6,7,8,9],now:9,num:4,num_bas:3,num_class:[1,5,9],num_dimens:[1,9],num_edg:[1,4,9],num_edge_featur:[1,9],num_fac:[4,9],num_featur:[1,9],num_graph:[1,9],num_lay:3,num_nod:[1,3,4,5,7,9],num_node_featur:[1,9],num_rel:3,num_stack:3,number:[0,1,2,3,4,5,9],nvcc:8,obj:[2,3],object:[1,2,3,4,6,8,9],obtain:3,occur:[],odot:3,offic:[],offici:8,offlin:4,old:[1,9],omit:9,onc:6,one:[1,2,3,4,5,6,8,9],one_hot:5,onehotdegre:4,onli:[1,3,6,7,9],ontolog:2,open:8,oper:[3,7,9],ops:6,optim:9,option:[1,2,3,4,5,6,7,8],order:[1,3,6,8],origin:[3,4],osp:6,otc:2,other:[0,1,4,8],otherwis:2,our:[7,9],out:[3,6,9],out_channel:[3,7],output:[3,4,5,7,9],output_devic:3,outsourc:8,over:[1,2,3,9],overlai:3,overridden:1,own:[0,8,9],packag:[0,8],pagerank:3,pair:3,pairwis:9,paper:[0,2,3,4],parallel:[3,9],paramet:[1,2,3,4,5,7,9],part:2,particular:[],pass:[0,2,3,6,9],path:[1,6,8],pcpnet:2,pcpnetdataset:2,per:[1,3,9],perform:[1,4,9],perm:9,permut:[3,7,9],person:3,phi:7,phi_:3,photo:2,physic:2,pick:3,pip:8,pistol:2,pitfal:2,place:7,plain:[1,9],planetoid:[2,9],pleas:8,point:[0,2,3,4,7,9],pointcnn:3,pointconv:3,pointnet:3,polar:4,pool:9,popular:7,portion:3,pos:[1,3,5,7,9],pos_edge_index:3,pose:2,posit:[1,2,3,4,5,9],positv:3,post:9,pow:7,power:3,ppi:2,pre_filt:[1,2,6],pre_transform:[1,2,6,9],precis:[3,5],precomput:6,pred:[5,9],predict:[2,3,5],present:[1,2],pretend:[],prevent:8,previou:8,previous:9,prime:3,print:[1,8,9],probabilist:3,probabilti:3,probabl:[3,4],problem:8,proce:7,process:[1,3,6,7,9],processed_dir:[1,6],processed_file_nam:[1,6],processed_path:[1,6],processing_step:3,produc:3,product:[2,3],profil:4,project:3,propag:[3,7],propagation_matrix:3,properti:[2,3,6],protein:2,provid:[2,6,7,9],pseudo:[3,4],publicli:6,publish:0,pubm:[2,9],pyramid:2,python:[1,6,8,9],pytorch:[6,7,8,9],pytorch_scatt:8,qm7:9,qm7b:2,qm9:[2,9],qquad:9,quantum:[2,3],queri:3,radiu:3,radius_graph:3,radiusgraph:4,random:4,random_start:3,randomflip:4,randomli:[1,4,9],randomrot:4,randomscal:4,randomshear:4,randomtransl:[4,9],randperm:9,rang:[4,9],rank:2,rare:8,rate:3,ratio:3,raw:[2,6,9],raw_dir:[1,6],raw_file_nam:[1,6],raw_path:[1,6],rceil:3,read:6,real:6,realli:6,reason:[],recal:5,receiv:9,recogn:8,recommend:[7,8],recompil:8,recomput:7,reconstruct:[1,6],record:6,recurr:3,recurs:3,reddit:2,refer:[0,5],regard:3,region:2,registr:2,regress:2,regular:3,reinstal:8,rel:[4,7],relat:[2,3,9],relu:[3,7,9],remov:[4,5,8],remove_fac:4,remove_self_loop:5,renam:8,replac:[4,8],replic:[3,9],replica:3,repositori:8,repres:[2,3],represent:[2,3],requir:9,requires_grad:3,reset_paramet:3,reshuffl:1,respect:[1,2,3,7,8],rest:3,restrict:[1,6,9],result:[3,4,5],review:2,revisit:2,rgcnconv:3,right:[3,5,7],roc:3,rocket:2,root:[1,2,3,6,8,9],root_weight:3,rotat:4,row:[3,4,7],run:[3,8,9],runtim:8,rusty1:8,sageconv:3,same:[1,3,4,5],sampl:[1,2,3,4],samplepoint:[2,4],save:[1,2,4,6,7,9],scalabl:2,scalar:1,scale:[3,4],scatter:[3,5,8,9],scatter_:5,scatter_mean:[3,9],scheme:[3,7],scipi:5,score:[3,5],second:[3,5],section:8,see:[1,3,6,8,9],seem:[],segment:[2,3,8],self:[1,3,4,5,6,7,8,9],semi:[2,3,9],separ:4,seq:[3,7],sequenc:[2,3,4],sequenti:[2,3,7],set2set:3,set:[1,2,3,4,5,7,8],setup:[6,8],sever:4,sgconv:3,shape:[1,2,3,4,7,9],shapenet:[2,9],share:[3,8],shared_weight:3,shear:4,shortli:9,should:[1,2,3,6,8,9],show:9,shown:7,shuffl:[1,9],sigma:3,sigma_m:3,sigmoid:3,signal:8,signatur:2,simgpl:3,similar:6,simpl:[0,3,4,7,9],simpli:[6,7,8],simplifi:[3,6],sinc:[2,3],singl:[1,2,3,6,9],size:[2,3,5,7,9],skateboard:2,skip:[1,3,6],slice:[1,6,9],slope:3,slow:6,small:[2,9],soft:3,softmax:[3,5,9],solv:8,some_file_1:6,some_file_2:6,sort:3,sourc:[1,2,3,4,5,6,7,8,9],source_to_target:[3,7],space:[3,7],spars:[4,5,7,8,9],sparse_to_dens:5,spatial:2,spawn:8,specif:[1,3,4,5,6,8],specifi:5,spectral:3,sphere:2,spheric:4,spline:[3,8],splinecnn:3,splineconv:3,split:[2,3,6,9],split_edg:3,sqrt:7,squar:[3,4,7],square_:[3,7],src:5,stack:3,stackoverflow:8,standard:9,start:[3,7],statu:8,std:[4,8],step:[2,7,8,9],stochast:3,stop:9,storag:1,store:3,straightforward:[6,7,9],string:[1,2,3,5,8],structur:[0,3,9],studi:[2,9],subject:2,subprocess:8,subsect:8,success:8,sudo:8,suit:8,sum:[3,4,7,9],sum_:[3,7],superpixel:2,supervis:[2,3,9],support:[1,8],surfac:2,symbol:8,symlink:8,symmetr:[3,7],synthet:2,system:8,tabl:2,take:[1,2,3,7,9],tanh:3,tar:1,target:[1,2,3,4,5,7,9],target_to_sourc:[3,7],targetindegre:4,task:2,teleport:3,temporarili:8,tensor:[1,3,4,5,7,9],termin:8,test:[2,3,8,9],test_dataset:9,test_mask:9,test_ratio:3,textrm:[3,4],than:3,thei:[2,7],them:[3,4,9],therefor:[1,6],theta:[3,7],thi:[1,3,4,6,7,8,9],thread:8,three:[4,9],through:[2,9],time:[2,3,5,7,9],tissu:2,tmp:[7,9],to_dense_batch:5,to_networkx:5,to_scipy_sparse_matrix:5,to_undirect:5,todens:4,togeth:[1,2,3,4,9],tool:8,top:[3,9],topkpool:3,torch:[3,5,6,7,8,9],torch_:8,torch_geometr:[0,6,7,9],torch_scatt:[3,9],torchvis:[6,9],total:2,toward:3,train:[2,3,9],train_dataset:9,train_ep:3,train_mask:9,trainabl:3,transfer:9,transform:[0,1,2,3,6,7],translat:[4,9],transpos:9,tri:3,triangl:9,true_neg:5,true_posit:5,trust:2,tudataset:[2,9],tupl:[3,4,9],tutori:[1,3],twice:3,two:[2,3,4,5,6,7,9],twohop:4,type:[3,5,9],typic:7,unabl:8,undefin:8,under:3,understand:9,undirect:[1,2,3,5,9],unexpect:[],uniformli:[3,4],union:3,univers:2,unmark:3,unsupervis:2,unsur:9,unweight:[2,5,9],updat:[3,7],upgrad:[],url:1,use:[0,1,2,3,5,6,7,9],use_node_attr:2,used:[1,3,4,6,7,9],useful:[3,6],user:[3,7,8],using:[2,3,7,8,9],usr:8,usual:[8,9],util:[0,7,9],val:[2,3],val_mask:9,val_ratio:3,valid:[2,3,9],valu:[1,2,3,4,5,8],vardens:2,vardensitygradi:2,vardensitystrip:2,vari:8,variabl:[3,7,8],variant:7,variat:3,varieti:[0,2],variou:[0,1,2,6,9],vdot:9,vector:[1,3,5,9],verbos:8,verifi:[7,8],version:[1,2,3,8],vert:[3,4],vertex:3,via:[1,2,6,8,9],view:7,volumetr:2,voxel:3,voxel_grid:3,w_m:3,wai:[7,9],wang:7,want:[6,9],warn:8,watertight:2,weight:[3,5,7],weight_decai:9,weisfeil:3,well:[0,3,7],went:[],what:6,when:1,where:[1,2,3,4,6,7,9],whether:[1,2,9],which:[1,3,4,5,6,7,8,9],who:2,whole:6,whom:2,width:5,window:2,wise:[3,7,9],wish:6,within:[3,4,9],without:3,word:2,work:[1,3],would:3,write:9,x_i:[3,7],x_j:[3,7],xconv:3,xxx:8,yet:4,yield:1,you:[3,6,7,8,9],your:[0,8,9],yourself:6,zachari:2,zero_grad:9,zip:1},titles:["PyTorch Geometric documentation","torch_geometric.data","torch_geometric.datasets","torch_geometric.nn","torch_geometric.transforms","torch_geometric.utils","Creating your own datasets","Creating message passing networks","Installation","Introduction by example"],titleterms:{"class":7,The:7,ask:8,base:7,batch:9,benchmark:9,common:9,content:3,convolut:[3,7],creat:[6,7],cuda:8,data:[1,9],dataparallel:3,dataset:[2,6,9],dens:3,document:0,edg:7,exampl:9,extens:8,frequent:8,gcn:7,geometr:0,global:3,graph:9,handl:9,hierarch:3,implement:7,indic:0,instal:8,introduct:9,larger:6,layer:[3,7],learn:9,maco:8,memori:6,messag:7,messagepass:7,method:9,mini:9,model:3,network:7,own:6,pass:7,pool:3,pytorch:0,question:8,spars:3,tabl:0,torch_geometr:[1,2,3,4,5],transform:[4,9],util:5,your:6}})