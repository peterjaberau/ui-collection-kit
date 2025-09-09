const data = {
  actions: {
    driveActions: {
      transformDriveData: {

      },
      fetchILLADriveClientResult: {

      },
      transformDriveResFormat: {

      }
    },
    fetchS3ClientResult: {

    },
    premiumActionHandler: {

    },
    runAction: {
      fetchCommonActionResult: {

      },
      fetchActionResult: {

      },
      runActionWithExecutionResult: {

      },
      runOriginAction: {

      },
      runActionWithDelay: {

      },
      registerActionPeriod: {

      },
      removeActionPeriod: {

      },
      removeAllActionPeriod: {

      }
    },
    runActionErrorForColla: {

    },
    runActionEventHandler: {
      runAllEventHandler: {

      }
    },
    runActionTransformer: {
      runTransformer: {

      }
    },
    transformDataFormat: {

    },
    transResponse: {

    }
  },
  componentNode: {
    getNewWidgetPropsByUpdateSlice: {

    },
    buildTree: {
      buildForest: {

      }
    },
    changeDisplayNameHelper: {
      changeDisplayNameHelperWhenUndoRedo: {

      }
    },
    copyHelper: {
      getComponentLayoutInfosWithRelativeCombineShape: {

      },
      getComponentNodeResultByRelativeCombineShape: {

      }
    },
    flatTree: {
      flatTreeToMap: {

      },
      transTreeToMap: {

      },
      buildTreeByMapNode: {

      }
    },
    search: {
      searchForefatherSectionNodeDisplayName: {

      },
      getCurrentSectionColumnNumberByChildDisplayName: {

      },
      searchParent: {

      },
      autoChangeContainersIndexWhenClick: {

      },
      autoChangeWhenClickOnCanvas: {

      },
      isWidgetInGridListOrList: {

      }
    }
  },
  drag: {
    startDragMultiNodes: {

    },
    endDragMultiNodes: {

    }
  },
  drive: {
    getUploadToDriveSingedURL: {

    },
    updateFilesToDrive: {

    },
    updateFilesToDriveStatus: {

    },
    uploadFileToDrive: {

    },
    handleFileToDriveResource: {

    },
    handleDownloadFromDriveResource: {

    },
    'GET_SINGED_URL_ERROR_CODE': {

    }
  },
  file: {
    calculateFileSize: {
      calculateFileSize: {

      },
      isValidBase64: {

      },
      getFileExtensionFromBase64: {

      },
      downloadSingleFile: {

      },
      getContentTypeByFileExtension: {

      },
      downloadExcelFile: {

      },
      convertToCSV: {

      },
      convertToTSV: {

      },
      getFileName: {

      },
      downloadFileFromURL: {

      },
      base642Blob: {

      },
      'FILE_EXTENSION_TO_CONTENT_TYPE_MAP': {

      }
    },
    parseFileValue: {
      handleParseSheets: {

      },
      handleParsePdf: {

      },
      handleParseDoc: {

      },
      handleParseLikeText: {

      },
      handleParseImage: {

      },
      handleParseFile: {

      }
    },
    upload: {

    }
  },
  generators: {
    generateAllTypePathsFromWidgetConfig: {

    },
    generateComponentNode: {
      generateWidgetLayoutInfo: {

      },
      generateComponentNodeByWidgetInfo: {

      },
      newGenerateChildrenComponentNode: {

      },
      newGenerateComponentNode: {

      },
      'TEMPLATE_DISPLAYNAME_KEY': ''
    },
    generateDisplayName: {
      DisplayNameGenerator: {

      },
      addDisplayName: '',
      removeDisplayName: '',
      updateDisplayName: '',
      generateOrUpdateDisplayName: '',
      'PLACEHOLDER_DISPLAYNAME': [

      ]
    },
    generatePageOrSectionConfig: {
      generateSectionContainerConfig: {

      },
      generateSectionsChildrenMenuComponentNode: {

      },
      generateSectionConfig: {

      },
      generateModalSectionConfig: {

      },
      defaultPageProps: {

      },
      generatePageConfig: {

      },
      generateDefaultLayoutConfig: {

      },
      generatePresetALayoutConfig: {

      },
      generatePresetBLayoutConfig: {

      },
      generatePresetCLayoutConfig: {

      },
      generatePresetDLayoutConfig: {

      },
      generatePresetELayoutConfig: {

      },
      layoutValueMapGenerateConfig: {

      }
    }
  },
  InspectHelper: {
    realInputValue: {

    },
    getNeedComputedValue: {

    }
  },
  evaluateDynamicString: {
    evaluateDynamicString: {

    },
    evaluateDynamicStringAndGetCalcContext: {

    },
    dynamicConverter: {
      getSnippets: {

      },
      getDynamicValue: {

      }
    },
    utils: {
      filterBindingSegmentsAndRemoveQuotes: {

      },
      stringToJS: {

      },
      JSToString: {

      },
      wrapCode: {

      },
      getDisplayNameAndAttrPath: {

      },
      getWidgetOrActionDynamicAttrPaths: {

      },
      wrapFunctionCode: {

      },
      'QUOTED_DYNAMIC_STRING_REGEX': '',
      'DYNAMIC_STRING_REG': ''
    },
    valueConverter: {
      templateSubstituteDynamicValues: {

      },
      smartSubstituteDynamicValues: {

      },
      substituteDynamicBindingWithValues: {

      },
      realInputValueWithScript: {

      },
      wrapperScriptCode: {

      },
      isWrapperCode: {

      }
    },
    codeSandbox: {
      evalScript: {

      }
    }
  },
  executionTreeHelper: {
    executionTreeFactory: {
      isRunScriptAttr: {

      },
      ExecutionTreeFactory: {

      },
      'IGNORE_ACTION_RUN_ATTR_NAME': [

      ],
      'IGNORE_AUTO_RUN_WITH_RUN_SCRIPT_ATTR_RULES': [

      ]
    },
    generateGlobalData: {

    },
    generatePageInfos: {
      generateCurrentPageInfo: {

      },
      generatePageInfos: {

      }
    },
    generateRawAction: {
      generateActionValidatePaths: {

      },
      generateRawAction: {

      }
    },
    generateRawWidget: {

    },
    generateUrlParams: {

    },
    RawTreeFactory: {
      RawTreeFactory: {

      },
      'CURRENT_USER_INFO_ACCESS_LIST_KEY': [

      ]
    },
    recursiveDelete: {

    },
    runtimePropsCollector: {
      ILLAEditorRuntimePropsCollectorInstance: {

      }
    },
    utils: {
      extractReferencesFromScript: {

      },
      getDisplayNameAndPropertyPath: {

      },
      isWidget: {

      },
      isAction: {

      },
      getImmediateParentsOfPropertyPaths: {

      },
      removeIgnoredKeys: {

      },
      removeParentPath: {

      },
      removeWidgetOrActionMethods: {

      },
      getObjectPaths: {

      }
    }
  },
  dynamicStringUtils: {
    ast: {
      getAST: {

      },
      wrapCode: {

      },
      extractIdentifierInfoFromCode: {

      },
      typeHelper: {
        isIdentifierNode: {

        },
        isMemberExpressionNode: {

        },
        isThisExpressionNode: {

        },
        isConditionalExpressionNode: {

        },
        isAwaitExpressionNode: {

        },
        isBinaryExpressionNode: {

        },
        isVariableDeclaration: {

        },
        isVariableDeclarator: {

        },
        isFunctionDeclaration: {

        },
        isFunctionExpression: {

        },
        isArrowFunctionExpression: {

        },
        isAssignmentExpression: {

        },
        isObjectExpression: {

        },
        isAssignmentPatternNode: {

        },
        isLiteralNode: {

        },
        isPropertyNode: {

        },
        isCallExpressionNode: {

        },
        isBlockStatementNode: {

        },
        isExpressionStatementNode: {

        },
        isExportDefaultDeclarationNode: {

        },
        isPropertyAFunctionNode: {

        },
        isArrayAccessorNode: {

        }
      },
      utils: {
        sanitizeScript: {

        }
      },
      walk: {
        ancestorWalk: {

        }
      },
      walkHelper: {
        getPropertyAccessor: {

        },
        constructFinalMemberExpIdentifier: {

        },
        getFunctionalParamNamesFromNode: {

        },
        getFunctionalParamsFromNode: {

        }
      }
    },
    converter: {
      getStringSnippets: {

      },
      getSnippets: {

      },
      convertPathToString: {

      }
    },
    helper: {
      isDynamicStringSnippet: {

      },
      hasDynamicStringSnippet: {

      },
      isDynamicStringReg: {

      },
      isLikInt: {

      },
      isChildPropertyPath: {

      }
    },
    evaluation: {
      isTrueObject: {

      },
      getAllPaths: {

      }
    },
    diff: {
      getNewEntityByUpdateSlice: {

      }
    },
    dependencyMap: {
      sortDependencies: {

      },
      makeParentsDependOnChild: {

      },
      makeParentsDependOnChildren: {

      },
      extractInfoFromBinding: {

      },
      getPrunedReferences: {

      },
      extractInfoFromBindings: {

      }
    }
  },
  eventHandlerHelper: {
    transformEvents: {

    },
    runEventHandler: {

    },
    'EVENT_ACTION_TYPE': [
      'openUrl',
      'showNotification',
      'setGlobalState',
      'setLocalStorage',
      'setRouter',
      'downloadFile',
      'widget',
      'datasource',
      'script',
      'downloadFromILLADrive',
      'saveToILLADrive'
    ],
    utils: {
      commonUtils: {
        goToURL: {

        },
        showNotification: {

        },
        copyToClipboard: {

        },
        setRouter: {

        },
        downloadFile: {

        }
      },
      driveUtils: {
        downloadFromILLADrive: {

        },
        saveToILLADrive: {

        },
        'FILE_TYPE': [

        ]
      },
      globalDataUtils: {
        setGlobalDataIn: {

        },
        setGlobalDataValue: {

        }
      },
      localStorage: {
        clearLocalStorage: {

        },
        setValueLocalStorage: {

        }
      },
      premiumEventUtils: {
        isNeedPreventForPremium: {

        }
      }
    }
  },
  validationFactory: {
    validationFactory: {

    },
    'VALIDATION_TYPES': [
      'String',
      'Number',
      'Boolean',
      'Array',
      'Object',
      'Undefined',
      'any'
    ]
  }
}
