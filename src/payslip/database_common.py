########################################################
    # To execute a query
########################################################
def execute(self, query, param=None):
    cursor = self.cursor()
    assert cursor is not None
    try:
        if type(param) is tuple:
            cursor.execute(query, param)
        elif type(param) is list:
            cursor.execute(query, param)
        else:
            cursor.execute(query)

        # logger.query("execute - query: %s, param:%s" % (query, param))
        cursor.nextset()
        return True

    except Exception as e:
        # logger.error("execute - query: %s, param:%s" % (query, param))
        # logger.error("execute : %s" % traceback.format_exc())
        raise e
