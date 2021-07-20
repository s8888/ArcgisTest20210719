// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/CostAnalysis/setting/nls/strings":{configText:"D\u00e9finir le texte de configuration\u00a0:",generalSettings:{tabTitle:"param\u00e8tres g\u00e9n\u00e9raux",measurementUnitLabel:"Unit\u00e9 de co\u00fbt",currencyLabel:"Symbole de co\u00fbt",roundCostLabel:"Co\u00fbt arrondi",projectOutputSettings:"Param\u00e8tres de sortie de projet",typeOfProjectAreaLabel:"Type de zone de projet",bufferDistanceLabel:"Distance de la zone tampon",csvReportExportLabel:"Permettre \u00e0 l\u2019utilisateur d\u2019exporter le rapport du projet",
editReportSettingsBtnTooltip:"Mettre \u00e0 jour les param\u00e8tres de rapport",roundCostValues:{twoDecimalPoint:"Deux points d\u00e9cimaux",nearestWholeNumber:"Nombre entier le plus proche",nearestTen:"Dizaine la plus proche",nearestHundred:"Centaine la plus proche",nearestThousand:"Milliers les plus proches",nearestTenThousands:"Dix mille les plus proches"},reportSettings:{reportSettingsPopupTitle:"Param\u00e8tres de rapport",reportNameLabel:"Nom du rapport (facultatif) :",checkboxLabel:"Afficher",
layerTitle:"Titre",columnLabel:"\u00c9tiquette",duplicateMsg:"\u00c9tiquette dupliqu\u00e9e"},projectAreaType:{outline:"Contour",buffer:"Zone tampon"},errorMessages:{currency:"Unit\u00e9 de devise non valide",bufferDistance:"Distance de zone tampon non valide",outOfRangebufferDistance:"La valeur doit \u00eatre sup\u00e9rieure \u00e0 0 et inf\u00e9rieure ou \u00e9gale \u00e0 100"}},projectSettings:{tabTitle:"Param\u00e8tres du projet",costingGeometrySectionTitle:"D\u00e9finir la g\u00e9ographie pour les co\u00fbts (facultatif)",
costingGeometrySectionNote:"Remarque\u00a0: Configurer cette couche permettra \u00e0 l\u2019utilisateur de d\u00e9finir des \u00e9quations de co\u00fbts de mod\u00e8les d\u2019entit\u00e9s en fonction des g\u00e9ographies.",projectTableSectionTitle:"Possibilit\u00e9 d\u2019enregistrer/de charger les param\u00e8tres de projet (facultatif)",projectTableSectionNote:"Remarque\u00a0: Configurer toutes les tables et couches permettra \u00e0 l\u2019utilisateur d\u2019enregistrer/de charger le projet pour une utilisation ult\u00e9rieure.",
costingGeometryLayerLabel:"Couche de g\u00e9om\u00e9trie de co\u00fbts",fieldLabelGeography:"Champ de la g\u00e9ographie d\u2019\u00e9tiquette",projectAssetsTableLabel:"Table de ressources de projets",projectMultiplierTableLabel:"Table de co\u00fbts suppl\u00e9mentaire de multiplicateur de projet",projectLayerLabel:"Couche de projet",configureFieldsLabel:"Configurer les champs",fieldDescriptionHeaderTitle:"Description du champ",layerFieldsHeaderTitle:"Champ de couche",selectLabel:"S\u00e9lectionner",
errorMessages:{duplicateLayerSelection:"La couche ${layerName} est d\u00e9j\u00e0 s\u00e9lectionn\u00e9e",invalidConfiguration:"S\u00e9lectionnez ${fieldsString}"},costingGeometryHelp:"\x3cp\x3eLa ou les couches de polygones ayant les conditions suivantes seront affich\u00e9es\u00a0: \x3cbr/\x3e \x3cli\x3e\tLa couche doit avoir la fonctionnalit\u00e9 Query\x3c/li\x3e\x3cli\x3e\tLa couche doit comporter un champ GlobalID\x3c/li\x3e\x3c/p\x3e",fieldToLabelGeographyHelp:"\x3cp\x3eLes champs de cha\u00eene et num\u00e9riques de la \u00e2\u20ac\u0153couche de g\u00e9om\u00e9trie de co\u00fbt\u00e2\u20ac\u009d s\u00e9lectionn\u00e9e seront affich\u00e9s dans le menu d\u00e9roulant \u00e2\u20ac\u0153Champ de la g\u00e9ographie d\u2019\u00e9tiquette\u00e2\u20ac.\x3c/p\x3e",
projectAssetsTableHelp:"\x3cp\x3eLa ou les tables ayant les conditions suivantes seront affich\u00e9es\u00a0: \x3cbr/\x3e \x3cli\x3eLa table doit comporter des fonctionnalit\u00e9s de modification, \u00e0 savoir \u00e2\u20ac\u0153Cr\u00e9er\u00e2\u20ac\u009d, \u00e2\u20ac\u0153Supprimer\u00e2\u20ac\u009d et \u00e2\u20ac\u0153Mettre \u00e0 jour\u00e2\u20ac\u009d\x3c/li\x3e    \x3cli\x3eLa table doit comporter six champs avec un nom et un type de donn\u00e9es exacts\u00a0:\x3c/li\x3e\x3cul\x3e\x3cli\x3e\tAssetGUID (champ de type GUID)\x3c/li\x3e\x3cli\x3e\tCostEquation (champ de type cha\u00eene)\x3c/li\x3e\x3cli\x3e\tSc\u00e9nario (champ de type cha\u00eene)\x3c/li\x3e\x3cli\x3e\tTemplateName (champ de type cha\u00eene)\x3c/li\x3e\x3cli\x3e    GeographyGUID (champ de type GUID)\x3c/li\x3e\x3cli\x3e\tProjectGUID (champ de type GUID)\x3c/li\x3e\x3c/ul\x3e \x3c/p\x3e",
projectMultiplierTableHelp:"\x3cp\x3eLa ou les tables ayant les conditions suivantes seront affich\u00e9es\u00a0: \x3cbr/\x3e \x3cli\x3eLa table doit comporter des fonctionnalit\u00e9s de modification, \u00e0 savoir \u00e2\u20ac\u0153Cr\u00e9er\u00e2\u20ac\u009d, \u00e2\u20ac\u0153Supprimer\u00e2\u20ac\u009d et \u00e2\u20ac\u0153Mettre \u00e0 jour\u00e2\u20ac\u009d\x3c/li\x3e    \x3cli\x3eLa table doit comporter cinq champs avec un nom et un type de donn\u00e9es exacts\u00a0:\x3c/li\x3e\x3cul\x3e\x3cli\x3e\tDescription (champ de type cha\u00eene)\x3c/li\x3e\x3cli\x3e\tType (champ de type cha\u00eene)\x3c/li\x3e\x3cli\x3e\tValeur (champ de type flottant/double)\x3c/li\x3e\x3cli\x3e\tCostindex (champ de type entier)\x3c/li\x3e\x3cli\x3e   \tProjectGUID (champ de type GUID)\x3c/li\x3e\x3c/ul\x3e \x3c/p\x3e",
projectLayerHelp:"\x3cp\x3eLa ou les couches de polygones ayant les conditions suivantes seront affich\u00e9es\u00a0: \x3cbr/\x3e \x3cli\x3eLa couche doit comporter des fonctionnalit\u00e9s de modification, \u00e0 savoir \u00e2\u20ac\u0153Cr\u00e9er\u00e2\u20ac\u009d, \u00e2\u20ac\u0153Supprimer\u00e2\u20ac\u009d et \u00e2\u20ac\u0153Mettre \u00e0 jour\u00e2\u20ac\u009d\x3c/li\x3e    \x3cli\x3eLa couche doit comporter cinq champs avec un nom et un type de donn\u00e9es exacts\u00a0:\x3c/li\x3e\x3cul\x3e\x3cli\x3eProjectName (champ de type cha\u00eene)\x3c/li\x3e\x3cli\x3eDescription (champ de type cha\u00eene)\x3c/li\x3e\x3cli\x3eTotalassetcost (champ de type flottant/double)\x3c/li\x3e\x3cli\x3eGrossprojectcost (champ de type flottant/double)\x3c/li\x3e\x3cli\x3eGlobalID (champ de type GlobalID)\x3c/li\x3e\x3c/ul\x3e \x3c/p\x3e",
pointLayerCentroidLabel:"Centro\u00efde de la couche de points",selectRelatedPointLayerDefaultOption:"S\u00e9lectionner",pointLayerHintText:"\x3cp\x3eLes couches de points avec les conditions suivantes s\u2019afficheront : \x3cbr/\x3e \x3cli\x3e\tLa couche doit comporter le champ 'Projectid' (type GUID)\x3c/li\x3e\x3cli\x3e\tLa couche doit disposer des fonctionnalit\u00e9s de mise \u00e0 jour 'Cr\u00e9er', 'Supprimer' et 'Mettre \u00e0 jour'\x3c/li\x3e\x3c/p\x3e"},layerSettings:{tabTitle:"Param\u00e8tres de la couche",
layerNameHeaderTitle:"Nom de la couche",layerNameHeaderTooltip:"Liste des couches sur la carte",EditableLayerHeaderTitle:"Modifiable",EditableLayerHeaderTooltip:"Inclure la couche et ses mod\u00e8les dans le widget de co\u00fbt",SelectableLayerHeaderTitle:"S\u00e9lectionnable",SelectableLayerHeaderTooltip:"La g\u00e9om\u00e9trie de l\u2019entit\u00e9 peut \u00eatre utilis\u00e9e pour g\u00e9n\u00e9rer un nouvel \u00e9l\u00e9ment de co\u00fbt",fieldPickerHeaderTitle:"ID de projet (facultatif)",fieldPickerHeaderTooltip:"Champ facultatif (de type cha\u00eene) pour stocker l\u2019ID de projet dans",
selectLabel:"S\u00e9lectionner",noAssetLayersAvailable:"Aucune couche valide trouv\u00e9e sur la carte web",disableEditableCheckboxTooltip:"Cette couche ne comporte aucune fonctionnalit\u00e9 de modification",missingCapabilitiesMsg:"Les fonctionnalit\u00e9s suivantes sont absentes de cette couche\u00a0:",missingGlobalIdMsg:"Cette couche ne comporte pas le champ ID global",create:"Cr\u00e9er",update:"Mettre \u00e0 jour",deleteColumnLabel:"Supprimer",attributeSettingHeaderTitle:"Param\u00e8tres des attributs",
addFieldLabelTitle:"Ajouter des attributs",layerAttributesHeaderTitle:"Attributs de couche",projectLayerAttributesHeaderTitle:"Attributs de couche du projet",attributeSettingsPopupTitle:"Param\u00e8tres des attributs de couche"},costingInfo:{tabTitle:"Infos de co\u00fbts",proposedMainsLabel:"Principaux propos\u00e9s",addCostingTemplateLabel:"Ajouter un mod\u00e8le de co\u00fbts",manageScenariosTitle:"G\u00e9rer les sc\u00e9narios",featureTemplateTitle:"Mod\u00e8le d\u2019entit\u00e9s",costEquationTitle:"\u00c9quation de co\u00fbt",
geographyTitle:"G\u00e9ographie",scenarioTitle:"Sc\u00e9nario",actionTitle:"Actions",scenarioNameLabel:"Nom du sc\u00e9nario",addBtnLabel:"Ajouter",srNoLabel:"Non.",deleteLabel:"Supprimer",duplicateScenarioName:"Nom de sc\u00e9nario dupliqu\u00e9",hintText:"\x3cdiv\x3eConseil\u00a0: Utilisez les mots-cl\u00e9s suivants\x3c/div\x3e\x3cul\x3e\x3cli\x3e\x3cb\x3e{TOTALCOUNT}\x3c/b\x3e\u00a0: Utilise le nombre total de ressources du m\u00eame type dans une g\u00e9ographie\x3c/li\x3e\x3cli\x3e\x3cb\x3e{MEASURE}\x3c/b\x3e\u00a0: Utilise la longueur de surface et de ressource de ligne pour la ressource de polygone\x3c/li\x3e\x3cli\x3e\x3cb\x3e{TOTALMEASURE}\x3c/b\x3e\u00a0: Utilise la longueur totale de ressource de ligne et de surface totale pour la ressource de polygone du m\u00eame type dans une g\u00e9ographie\x3c/li\x3e\x3c/ul\x3e Vous pouvez utiliser des fonctions telles que\u00a0:\x3cul\x3e\x3cli\x3eMath.abs(-100)\x3c/li\x3e\x3cli\x3eMath.floor({TOTALMEASURE})\x3c/li\x3e\x3c/ul\x3eModifiez l\u2019\u00e9quation de co\u00fbt selon les besoins de votre projet.",
noneValue:"Aucun",requiredCostEquation:"\u00c9quation de co\u00fbt non valide pour ${layerName}\u00a0: ${templateName}",duplicateTemplateMessage:"Une entr\u00e9e de mod\u00e8le dupliqu\u00e9e existe pour ${layerName}\u00a0: ${templateName}",defaultEquationRequired:"L\u2019\u00e9quation par d\u00e9faut est requise pour ${layerName}\u00a0: ${templateName}",validCostEquationMessage:"Entrez une \u00e9quation de co\u00fbt valide",costEquationHelpText:"Modifiez l\u2019\u00e9quation de co\u00fbt en fonction des besoins de votre projet",
scenarioHelpText:"S\u00e9lectionnez un sc\u00e9nario en fonction des besoins de votre projet",copyRowTitle:"Copier la ligne",noTemplateAvailable:"Ajoutez au moins un mod\u00e8le pour ${layerName}",manageScenarioLabel:"G\u00e9rer le sc\u00e9nario",noLayerMessage:"Saisissez au moins une couche dans ${tabName}",noEditableLayersAvailable:"La ou les couches doivent \u00eatre s\u00e9lectionn\u00e9es comme modifiables dans l\u2019onglet des param\u00e8tres de couche",updateProjectCostCheckboxLabel:"Mettre \u00e0 jour les \u00e9quations du projet",
updateProjectCostEquationHint:"Astuce : ceci permettra \u00e0 l\u2019utilisateur de mettre \u00e0 jour les \u00e9quations de co\u00fbt des ressources d\u00e9j\u00e0 ajout\u00e9es aux projets existants \u00e0 l\u2019aide des nouvelles \u00e9quations d\u00e9finies ci-dessous en fonction du mod\u00e8le d\u2019entit\u00e9s, de la g\u00e9ographie et du sc\u00e9nario. Si la combinaison est introuvable, elle est d\u00e9finie sur l\u2019\u00e9quation de co\u00fbt par d\u00e9faut, c\u2019est-\u00e0-dire en configurant la g\u00e9ographie et le sc\u00e9nario sur 'Aucun'. En cas de suppression du mod\u00e8le d\u2019entit\u00e9s, le co\u00fbt est d\u00e9fini sur 0."},
statisticsSettings:{tabTitle:"Param\u00e8tres suppl\u00e9mentaires",addStatisticsLabel:"Ajouter des statistiques",fieldNameTitle:"Terrain",statisticsTitle:"Etiquette",addNewStatisticsText:"Ajouter de nouvelles statistiques",deleteStatisticsText:"Supprimer les statistiques",moveStatisticsUpText:"D\u00e9placer les statistiques vers le haut",moveStatisticsDownText:"D\u00e9placer les statistiques vers le bas",selectDeselectAllTitle:"S\u00e9lectionner tout"},projectCostSettings:{addProjectCostLabel:"Ajouter un co\u00fbt de projet suppl\u00e9mentaire",
additionalCostValueColumnHeader:"Valeur",invalidProjectCostMessage:"Entr\u00e9e non valide pour le co\u00fbt de projet",additionalCostLabelColumnHeader:"Etiquette",additionalCostTypeColumnHeader:"Type"},statisticsType:{countLabel:"Total",averageLabel:"Moyenne",maxLabel:"Maximum",minLabel:"Minimal",summationLabel:"Addition",areaLabel:"Surface",lengthLabel:"Longueur"},_localized:{}}});