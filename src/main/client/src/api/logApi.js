export default class LogAPI {
  logOperation(opLog) {
    if (this.validateOpLog(opLog)) {
      return new Promise();
    }
  }

  validateAndConvertOpLog(opLog) {
    if (opLog != null) {
      if ('asn' in opLog && opLog.asn != null) {
        if ('calling_code' in opLog && opLog.calling_code != null) {
          if ('city' in opLog && opLog.city != null) {
            if ('continent_code' in opLog && opLog.continent_code != null) {
              if ('continent_name' in opLog && opLog.continent_name != null) {
                if ('count' in opLog && opLog.count != null) {
                  if ('country_code' in opLog && opLog.country_code != null) {
                    if ('country_name' in opLog && opLog.country_name != null) {
                      if ('currency' in opLog && opLog.currency != null) {
                        if ('emoji_flag' in opLog && opLog.emoji_flag != null) {
                          if (
                            'emoji_unicode' in opLog &&
                            opLog.emoji_unicode != null
                          ) {
                            if ('flag' in opLog && opLog.flag != null) {
                              if ('ip' in opLog && opLog.ip != null) {
                                if ('is_eu' in opLog && opLog.is_eu != null) {
                                  if (
                                    'languages' in opLog &&
                                    opLog.languages != null
                                  ) {
                                    if (
                                      'latitude' in opLog &&
                                      opLog.latitude != null
                                    ) {
                                      if (
                                        'longitude' in opLog &&
                                        opLog.longitude != null
                                      ) {
                                        if (
                                          'organisation' in opLog &&
                                          opLog.organisation != null
                                        ) {
                                          if (
                                            'postal' in opLog &&
                                            opLog.postal != null
                                          ) {
                                            if (
                                              'region' in opLog &&
                                              opLog.region != null
                                            ) {
                                              if (
                                                'region_code' in opLog &&
                                                opLog.region_code != null
                                              ) {
                                                if (
                                                  'time_zone' in opLog &&
                                                  opLog.time_zone != null
                                                ) {
                                                  if (
                                                    'threat' in opLog &&
                                                    opLog.threat != null
                                                  ) {
                                                    if (
                                                      this.checkDeepParams() !==
                                                      null
                                                    ) {
                                                      if (
                                                        this.checkClientParams()
                                                      ) {
                                                        return this.convertToFirestoreOpLog();
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    return null;
  }

  checkDeepParams(opLog) {
    if ('code' in opLog.currency && opLog.currency.code != null) {
      if ('name' in opLog.currency && opLog.currency.name != null) {
        if ('native' in opLog.currency && opLog.currency.native != null) {
          if ('plural' in opLog.currency && opLog.currency.plural != null) {
            if ('symbol' in opLog.currency && opLog.currency.symbol != null) {
              if (
                'name' in opLog.languages[0] &&
                opLog.languages[0].name != null
              ) {
                if (
                  'native' in opLog.languages[0] &&
                  opLog.langueages[0].native != null
                ) {
                  if (
                    'abbr' in opLog.time_zone &&
                    opLog.time_zone.abbr != null
                  ) {
                    if (
                      'current_time' in opLog.time_zone &&
                      opLog.time_zone.current_time != null
                    ) {
                      if (
                        'is_dst' in opLog.time_zone &&
                        opLog.time_zone.is_dst != null
                      ) {
                        if (
                          'name' in opLog.time_zone &&
                          opLog.time_zone.name != null
                        ) {
                          if (
                            'offset' in opLog.time_zone &&
                            opLog.time_zone.offset != null
                          ) {
                            if (
                              'is_dst' in opLog.time_zone &&
                              opLog.time_zone.is_dst != null
                            ) {
                              if (
                                'current_time' in opLog.time_zone &&
                                opLog.time_zone.current_time != null
                              ) {
                                if (
                                  'is_tor' in opLog.threat &&
                                  opLog.threat.is_tor !== true
                                ) {
                                  if (
                                    'is_proxy' in opLog.threat &&
                                    opLog.threat.is_proxy != null
                                  ) {
                                    if (
                                      'is_anonymous' in opLog.threat &&
                                      opLog.threat.is_anonymous != null
                                    ) {
                                      if (
                                        'is_known_attacker' in opLog.threat &&
                                        opLog.threat.is_known_attacker !== true
                                      ) {
                                        if (
                                          'is_threat' in opLog.threat &&
                                          opLog.threat.is_threat != null
                                        ) {
                                          if (
                                            'is_bogon' in opLog.threat &&
                                            opLog.threat.is_bogon !== true
                                          ) {
                                            return true;
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  convertToFirestoreOpLog(opLog) {
    return {
      Asn: opLog.asn,
      Calling_Code: opLog.calling_code,
      City: opLog.city,
      Continent_Code: opLog.continent_code,
      Continent_Name: opLog.continent_name,
      Count: opLog.count,
      Country_Code: opLog.country_code,
      Country_Name: opLog.country_name,
      Currency: {
        Code: opLog.currency.code,
        Name: opLog.currency.name,
        Native: opLog.currency.native,
        Plural: opLog.currency.plural,
        Symbol: opLog.currency.symbol
      },
      Date: opLog.date,
      Emoji_Flag: opLog.emoji_flag,
      Emoji_Unicode: opLog.emoji_unicode,
      Flag: opLog.flag,
      IP: opLog.ip,
      Is_EU: opLog.is_eu,
      Languages: this.languagesFromOpLog(opLog),
      Latitude: opLog.latitude,
      Longitude: opLog.Longitude,
      Operation: opLog.operation,
      Organization: opLog.organisation,
      Params: opLog.params,
      Postal: opLog.postal,
      Region: opLog.region,
      Region_Code: opLog.region,
      Current_Time: opLog.current_time
    };
  }
}
